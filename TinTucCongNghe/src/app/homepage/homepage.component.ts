import { BaiVietDto } from './../../shared/service-proxies/service-proxies';
import { BaiVietServiceProxy } from "@shared/service-proxies/service-proxies";
import { ViewpostComponent } from "../content/view-content/viewpost/viewpost.component";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";

@Component({
  selector: "app-Homepage",
  templateUrl: "./Homepage.component.html",
  styleUrls: ["./Homepage.component.css"],
})
export class HomepageComponent implements OnInit, OnDestroy {
  sidebarExpanded: boolean;
  title = "TechNews";
  mediaSub: Subscription;
  deviceXs: boolean;
  _baiViets: any;

  constructor(
    public mediaObserver: MediaObserver,
    public dialog: MatDialog,
    private readonly _baiVietServiceProxy: BaiVietServiceProxy
  ) {}
  openDialog() {
    const dialogRef = this.dialog.open(ViewpostComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() : void {
    this.getlist();
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    });
    
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  getlist() {   
        return this._baiVietServiceProxy.getAll("1",0,9999).subscribe(
          result => { this._baiViets =result.items;});
  }
}
