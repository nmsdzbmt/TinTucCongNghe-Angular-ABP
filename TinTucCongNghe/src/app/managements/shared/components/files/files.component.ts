/* #region  import */
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, forwardRef } from '@angular/core';
import * as _ from 'lodash';
import { UUID } from 'angular2-uuid';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { type } from 'os';
import { BsModalService } from 'ngx-bootstrap';
import { ViewFileComponent } from '../view-file/view-file.component';
import { ToastrService } from '@core/services/toastr.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilesComponent),
      multi: true
    },
  ]

})
/* #endregion */

export class FilesComponent implements OnInit, ControlValueAccessor {

  @Input('listFile') listFile: any[] = [];
  @Input('title') title = "Thêm tập tin";
  @Input('readonly') readonly = false;

  id = UUID.UUID();

  onChange: (obj: any) => void;

  constructor(
    private readonly _md: BsModalService,
    private readonly _toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  /* #region  chon file */
  async onSelectFile(event, listFile) {

    if (event.target.files && event.target.files[0]) {

      var files = event.target.files;

      // for (let i = 0; i < files.length; i++) {
      //   if (this.isFileImage(files[i].type) == false) {
      //     this._toastr.error('Chỉ được chọn file hình');
      //     return;
      //   }
      // }

      for (let i = 0; i < files.length; i++) {
        var fileDto = files[i];

        fileDto = await this.fileBase64(fileDto);

        listFile.push(fileDto);

      }

      this.writeValue(listFile);
      this.onChange(listFile);

    }
  }

  /* #endregion */

  removeFileIndex(index, listFile) {

    listFile.splice(index, 1);

    this.writeValue(listFile);
    this.onChange(this.listFile);

  }


  fileBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        file.data = reader.result;
        file = _.pick(file, ['type', 'name', 'data', 'data2', 'id'])
        let regex = /data:([a-zA-z0-9/.\-\;]{0,})([,]{1})/gi;
        file.data = file.data.replace(regex, "");
        resolve(file);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  }

  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        let data = reader.result;
        // let regex = /data:([a-zA-z0-9/.\-\;]{0,})([,]{1})/gi;        
        // data = (data as any).replace(regex, "");
        resolve(data);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  isFileImage(type) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    return acceptedImageTypes.findIndex(e => e == type) > -1 ? true : false;
  }


  downloadFile(url) {
    window.open(url, "_blank");
  }

  /* #region  overider */
  writeValue(obj: any): void {
    this.listFile = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  /* #endregion */


  getThumbnailFile(file) {
    if (file.type.indexOf('image') != -1) {
      return file.id ? file.fileUrl : `data:${file.type};base64,${file.data}`;
    }
    else if (file.type.indexOf('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') != -1) return '/assets/media/files/xlsx.svg';
    else if (file.type.indexOf('video/mp4') != -1) return '/assets/media/files/mp4.svg';
    else if (file.type.indexOf('audio/mp3') != -1) return '/assets/media/files/mp3.svg';
    else if (file.type.indexOf('text/plain') != -1) return '/assets/media/files/file.png';
    else if (file.type.indexOf('application/pdf') != -1) return '/assets/media/files/pdf.svg';
    else if (file.type.indexOf('application/vnd.openxmlformats-officedocument.wordprocessingml.document') != -1) return '/assets/media/files/doc.svg';
    return '/assets/media/files/file.png';
  }

  openDialog(file) {
    if (file.type.indexOf('image') == -1) return
    var modal = this._md.show(ViewFileComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'modal-view-file',

    });

    modal.content.file = file;

    modal.content.onSave.subscribe(res => {
      alert(res);
    });

  }
}
