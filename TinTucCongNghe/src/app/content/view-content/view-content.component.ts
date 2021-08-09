import { MatDialog } from '@angular/material/dialog';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { Component, Input, OnInit } from '@angular/core';
import { BaiVietServiceProxy, TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {
  @Input() id:string;
  _baiViet:any;
  constructor(
    private readonly _baiVietServiceProxy: BaiVietServiceProxy,
    private readonly _theLoaiServiceProxy: TheLoaiServiceProxy,
    public dialog: MatDialog
    ) { }


    openDialog() {
      const dialogRef = this.dialog.open(ViewpostComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }  
  ngOnInit(): void {
    this.getlist();
  }
  ngOnChanges(){
    this.getlist();
  }

  getlist()
  {
   // if(this.id.length>2)
    return this._baiVietServiceProxy
              .getList(this.id)
              .subscribe(
                result => 
                  {
                    this._baiViet=result;
                    console.log("result=");
                    console.log(result);
                  });
     // else return 0;
  }
}
