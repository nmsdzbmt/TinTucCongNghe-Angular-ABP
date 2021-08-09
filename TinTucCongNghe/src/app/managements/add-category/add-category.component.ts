import { TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';
import { TheLoaiDto } from '../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  [x: string]: any;

  public title:string  ="thêm thể loại";
  public tl = new TheLoaiDto();
  dialogRef: any;
  constructor(
    private readonly _theLoaiServiceProxy:TheLoaiServiceProxy
  ) { }

  save(){
    const theLoais = new TheLoaiDto();
    this.tl.creatorUserId=1;
    this.tl.isDelete=true;
    this.tl.status=true;
    // this.theLoai.creationTime = Date.getDate() ;  
    // this.theLoai.lastModificationTime = Date.getDate();
    theLoais.init(this.tl);
    this._theLoaiServiceProxy.create(theLoais).subscribe((_res) => {});
    alert("Thêm thể loại thành công !")
  }

  
  close() {
    this.dialogRef.close();
  }

  
  ngOnInit(): void {
  }

}
