

import { Component, OnInit } from '@angular/core';
import { CreateBaiVietDto, BaiVietServiceProxy, TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';

import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  uploadForm = new FormGroup({
     
    imgSrc: new FormControl('', [Validators.required])
  });

  TL:any;
  public title:string  ="thêm bài viết";
  public post = new CreateBaiVietDto();
  
  public htmlContent = 'title, content, description';
  html?: string;
  config: any = {
    airMode: false,
    tabDisable: true,
    popover: {
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
      ],
      image: [
        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']],
      ],
      link: [['link', ['linkDialogShow', 'unlink']]],
      air: [
        [
          'font',
          [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'clear',
          ],
        ],
      ],
    },
    height: '100px',
    uploadImagePath: '/api/upload',
    toolbar: [
      ['misc', ['codeview', 'undo', 'redo', 'codeBlock']],
      [
        'font',
        [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'superscript',
          'subscript',
          'clear',
        ],
      ],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style0', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']],
      ['customButtons', ['testBtn']],
    ],
    
    codeviewFilter: true,
    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml|.*onmouseover)[^>]*?>/gi,
    codeviewIframeFilter: true,
  };


  config2: any = {
    airMode: false,
    tabDisable: true,
    popover: {
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
      ],
      image: [
        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']],
      ],
      link: [['link', ['linkDialogShow', 'unlink']]],
      air: [
        [
          'font',
          [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'clear',
          ],
        ],
      ],
    },
    height: '200px',
    uploadImagePath: '/api/upload',
    toolbar: [
      ['misc', ['codeview', 'undo', 'redo', 'codeBlock']],
      [
        'font',
        [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'superscript',
          'subscript',
          'clear',
        ],
      ],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style0', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']],
      ['customButtons', ['testBtn']],
    ],
    
    codeviewFilter: true,
    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml|.*onmouseover)[^>]*?>/gi,
    codeviewIframeFilter: true,
  };
  constructor(
    // public dialogRef: MatDialogRef<AddPostComponent>,
    // @Inject(MAT_DIALOG_DATA)
     
    private readonly _theLoaiServiceProxy: TheLoaiServiceProxy,
    private readonly _baiVietServiceProxy: BaiVietServiceProxy
  ) { }

  getList() {
      return this._theLoaiServiceProxy.getAll("1",0,9999).subscribe(result => {
      this.TL=result.items;
      console.log(this.TL);
      
      });
  }

  save(){
    const baiViets = new CreateBaiVietDto();

  //   "theLoaiID": "7d74aad4-f69f-4170-1847-08d9092476ec", co
  // "urlImage": "string",them 1
  // "title": "string", co
  // "titleSearch": "string",them2
  // "content": "string", co
  // "description": "string",them3
  // "lastModifierUserId": 1,them4
  // "creatorUserId": 1 them5
    this.post.creatorUserId=1;   // sau nay viet login
    this.post.lastModifierUserId=1;     // sau nay viet login
    this.post.search=  this.post.title +" "+this.removeAccents(this.post.title);
    //this.post.description= '2';//them sau
    // this.post.creationTime = Date.getDate() ;  
    // this.post.lastModificationTime = Date.getDate();
    this.post.imgSrc = this.uploadForm.value.imgSrc;
   
    baiViets.init(this.post);
    
    console.log(baiViets);
    this._baiVietServiceProxy.create(baiViets).subscribe((res) => {
      console.log("Xem ket qua");
      console.log(res);
      alert("Them bai viet thanh cong");
      
    // abp.message.confirm(null, `Bạn có chắc chắn?`, (res) => {
    //   if (res) this.dialogRef.close('delete');
    // this.dialogRef.close(res);
    //   abp.notify.success(
    //     ` với thông tin  đã được lưu thành công.`,
    //     `'Tạo mới'`,
    //     {
    //       position: 'top-end'
    //     }    
    // );
  });


  }

  ngOnInit(): void {
    this.getList() ;
    this.htmlContent = 'title, content, description';
  }
  
  removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  upload()
  {
    console.log(this.uploadForm.value.imgSrc);
    
  }
  onFileChange(e: any): void {
   
    const reader = new FileReader();
    const target: DataTransfer = e.target as DataTransfer;

    if( e.target.files.length ==1) {
      const file = target.files[0];
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        // this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc: reader.result   
          //conver base 64

        });
   
      };
   }
 }
}
