import { Component, OnInit } from '@angular/core';
import { TheLoaiDto, TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  public title:string  ="thêm thể loại";
  public tl = new TheLoaiDto();
  constructor(
    private readonly _theLoaiServiceProxy:TheLoaiServiceProxy
  ) { }

  update(){
    const theLoais = new TheLoaiDto();
    // this.tl.creatorUserId=1;
    // this.tl.isDelete=true;
    // this.tl.status=true;
    // this.theLoai.creationTime = Date.getDate() ;  
    // this.theLoai.lastModificationTime = Date.getDate();
    theLoais.init(this.tl);
    this._theLoaiServiceProxy.update(theLoais).subscribe((_res) => {});
    alert(theLoais);
  }

  ngOnInit(): void {
  }

}
