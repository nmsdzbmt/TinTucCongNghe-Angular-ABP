import { ComponentRegistryService } from './../../../../shared/services/component-registry/component-registry.service';
import {  CreateBaiVietDto } from './../../../../shared/service-proxies/service-proxies';
import { TableOverViewModel, HeaderTemplate } from './../../../../shared/components/overview-page/overview-page';
import { BaiVietServiceProxy } from "@shared/service-proxies/service-proxies";
import { LoaderService } from "./../../../loader/loader.service";
import { Component, ViewChild } from "@angular/core";
import { map, shareReplay } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import * as _ from 'lodash-es';
import { ActivatedRoute } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-homemanagement",
  templateUrl: "./homemanagement.component.html",
  styleUrls: ["./homemanagement.component.css"],
})
export class HomemanagementComponent {

  
  group = null;
  parent = null;
  tableOverViewModel: TableOverViewModel;
  headers: HeaderTemplate[] = [];
  title: string;
  icon: string;
  head:any;
  baiviet  : CreateBaiVietDto;
  hh:any;

    private orgData;
    private componentDetailName: string;
      
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

    isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return true;
        }
        return false;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly _baiVietServiceProxy: BaiVietServiceProxy,
    public loaderService: LoaderService,
    private ComponentRegistryService: ComponentRegistryService,
    private readonly _activatedRoute: ActivatedRoute
    
  ) {
  }

  mVD: any;
  mArticles: Array<any> = [];
  mSources: Array<any> = [];

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem("theme") === "Dark" ? true : false;
    this.hh='[';
      this.hh+='{"header":{"title":"Ti??u ?????","css":{"class":"text-center wh width-10"}},"row":{"css":"","items":[{"type":"view","key":"title","value":"","css":{"class":""}}]}},';
      this.hh+='{"header":{"title":"T??m t???t","css":{"class":""}},"row":{"css":"","items":[{"type":"html","key":"description","value":"","css":{"class":""}}]}},';
      this.hh+='{"header":{"title":"Thao t??c","css":{"class":"wh width-1"}},"row":{"css":"","items":[{"type":"button","key":"","value":"S???a","css":{"icon":"fa fa-pencil-square-o","class":"btn btn-primary"},"component":{"code":"","name":"AddPostComponent","params":[]}}]}}';
      this.hh+=']';

    this.headers=JSON.parse(this.hh);  
      //console.log(this.headers);
      this.getList();
  }
  getList() {
    
  
      return this._baiVietServiceProxy.getAll("1",0,9999).subscribe(result => {console.log(result.items);console.log(result);
      
        this.head = this.headers;
        result.items = _.orderBy(result.items, ['index', 'creationTime'], ['asc', 'desc']);
        

        this.head = this.convertJsonToHeader(this.headers);
       _.forEach(result.items, (hk: any) => {
        hk._headerRow = _.map(this.head, 'row');
        
      });
      this.orgData = _.cloneDeep(result.items);
      
      
      this.tableOverViewModel = {
          header: this.head,
          data: result.items,//result,
          pageSize: 20,
          totalCount: result.items.length
        };   
                  
      });
  } 
  deleteSelection(ids:string) {
    console.log(ids);
    this._baiVietServiceProxy.delete(ids).subscribe(_res => {
      this.refresh();
    });
  }
  refresh(): void {
    window.location.reload();
}

  storeThemeSelection() {
    localStorage.setItem("theme", this.isDarkTheme ? "Dark" : "Light");
  }
  private convertJsonToHeader(headerJson) {
    return _.map(headerJson, (h) => {
      return {
        title: h.header.title,
        css: h.header.css,
        row: {
          css: h.row.css,
          items: _.map(h.row.items, (r) => {
            return {
              key: r.key,
              actionKey: r.actionKey,
              type: r.type,
              value: r.value,
              css: r.css,
              component: r.component
            };
          })
        }
      };
    });
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     title: name,
//     location: Math.round(Math.random() * 100).toString(),
//     status: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }

/** Constants used to fill up our data base. */
// const COLORS = ['M???c ?????nh'];
// const NAMES = ['TECNO TR??? L???I V???I SI??U PH???M GAMING PHONE POVA 2 NH??NG C?? GI?? B??N C???C ???B???T NG??????', 
// 'iPhone 13: s??? c?? m??u cam v?? thi???t k??? camera ch??o',
// 'Ch??nh th???c ban h??nh b??? quy t???c ???ng x??? tr??n m???ng x?? h???i', 
// 'Samsung Galaxy M32 l??? c???u h??nh v???i pin kh???ng, m??n h??nh ???n t?????ng', 
// 'Huawei ????a Mate 40 Pro, Mate 40E & Nova 8 Pro t??i xu???t v???i Harmony OS ch??? c?? 4G', 
// '3 ng??y cu???i tu???n, Viettel Store tung gi?? si??u ???h???i??? d??nh cho vivo Y53s'];

// export interface UserData {
//   id: string;
//   title: string;
//   location: string;
//   status: string;
// }

