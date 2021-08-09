import { Component, Input } from '@angular/core';
import { TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';
// import { TheLoaiDto, TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  _theLoai:any;
  mangso:any="04d3bf13-7a8d-4cd9-cd1c-08d91ff380a7";          
  @Input() deviceXs: boolean;
  topVal = 0;
  constructor(
    private readonly _theLoaiServiceProxy:TheLoaiServiceProxy
  ) { }
  ngOnInit() {
    this.GetAll();  
  }
 
  GetAll()
  {
    return this._theLoaiServiceProxy.getAll("1",0,9999).subscribe(
      result => { this._theLoai =result.items;console.log(this._theLoai);});
  }
  onScroll(e) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  clickk(id)
  {
    this.mangso = id;
    console.log(id);    
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }
}
