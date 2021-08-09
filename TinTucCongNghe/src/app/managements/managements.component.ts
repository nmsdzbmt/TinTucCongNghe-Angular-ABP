import { LoaderService } from "./../loader/loader.service";
import { NewsApiService } from "./../../shared/service-proxies/news-api.service";
import { Component, OnInit } from "@angular/core";
import { BaiVietServiceProxy } from "@shared/service-proxies/service-proxies";
import { BreakpointObserver, Breakpoints, MediaMatcher } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-managements",
  templateUrl: "./managements.component.html",
  styleUrls: ["./managements.component.scss"],
})
export class ManagementsComponent implements OnInit {
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string;
  isAdmin: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly _baiVietServiceProxy: BaiVietServiceProxy,
    public loaderService: LoaderService,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia("(max-width: 1000px)");
  }

  mVD: any;
  mArticles: Array<any> = [];
  mSources: Array<any> = [];

  ngOnInit() {

  }

}
