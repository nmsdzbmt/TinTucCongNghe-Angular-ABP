import { BaiVietServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  @Input() id:string;
  _baiViet:any;
  constructor(
    private readonly _baiVietServiceProxy: BaiVietServiceProxy
    ) { }

  getlist()
  {
    return this._baiVietServiceProxy
              .getList(this.id)
              .subscribe( 
                result => 
                  {
                    this._baiViet=result;
                    console.log("result=");
                    console.log(result);
                  });
  }
  ngOnInit(): void {
    this.getlist();
  }

}
