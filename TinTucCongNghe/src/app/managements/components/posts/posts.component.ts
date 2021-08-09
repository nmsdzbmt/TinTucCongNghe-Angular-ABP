import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActionButtonTemplate, ActionType, HeaderTemplate, TableOverViewModel } from '@shared/components/overview-page/overview-page';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateBaiVietDto, BaiVietServiceProxy, TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash-es';
import { ActivatedRoute } from '@angular/router';
import { ComponentRegistryService } from '@shared/services/component-registry/component-registry.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
    group = null;
    parent = null;
    actions: ActionButtonTemplate[];
    headers: HeaderTemplate[] = [];
    tableOverViewModel: TableOverViewModel;
    title: string;
    icon: string;
    head:any;
    baiviet  : CreateBaiVietDto;
    hh:any;

    private actionsPermission = [];
    private componentDetailName: string;
    private orgData;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    

    constructor(
        private dialog: MatDialog,
        private breakpointObserver: BreakpointObserver,
        private readonly _theLoaiServiceProxy: TheLoaiServiceProxy, 
        private readonly _baiVietServiceProxy: BaiVietServiceProxy,
        private componentRegistryService: ComponentRegistryService,
        private readonly _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    this.title="Quản lý các bài viết"
      this.hh='[';
      // this.hh+='{"header":{"title":"STT","css":{"class":"text-center wh width-1"}},"row":{"css":"text-right","items":[{"type":"view","key":"stt","value":"","css":{"class":"display inline-block wh min-width-10 bold text-right pm margin-r-1 padding-0"}}]}},';
      //this.hh+='{"header":{"title":"Hình ảnh","css":{"class":"wh width-120"}},"row":{"css":"","items":[{"type":"view","key":"urlImage","value":"","css":{"class":""}}]}},' ;
      this.hh+='{"header":{"title":"Tiêu đề","css":{"class":"text-center wh width-10"}},"row":{"css":"","items":[{"type":"view","key":"title","value":"","css":{"class":""}}]}},';
      this.hh+='{"header":{"title":"Tóm tắt","css":{"class":""}},"row":{"css":"","items":[{"type":"html","key":"description","value":"","css":{"class":""}}]}},';
      this.hh+='{"header":{"title":"Thao tác","css":{"class":"wh width-1"}},"row":{"css":"","items":[{"type":"button","key":"","value":"Sửa","css":{"icon":"fa fa-pencil-square-o","class":"btn btn-primary"},"component":{"code":"","name":"AddPostComponent","params":[]}}]}}';
      this.hh+=']';
 
        
      this.headers=JSON.parse(this.hh);  
      //console.log(this.headers);
      this.getList();
          
        
    }
    getList() {
      this.actions = [
        {
          description: 'Thêm mới',
          icon: '',
          background: '',
          hide: () => _.find(this.actionsPermission, ['key', 'UPDATE'])?.value === 'false',
          callbackFunction: () => this.addOrEdit(null)
        }
      ];   
      
        return this._baiVietServiceProxy.getAll("1",0,9999).subscribe(result => {console.log(result.items);console.log(result);
        
          this.head = this.headers;
          result.items = _.orderBy(result.items, ['index', 'creationTime'], ['asc', 'desc']);
          
          const findDialog = _.find(this.head, (h) => {
            return _.find(h.row.items, ['type', 'button']);
          });
                   

          if (findDialog) {
            this.componentDetailName =
              _.find(findDialog.row.items, ['default', 'true'])?.component.name || findDialog.row.items[0].component.name;
              
          }

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

    
    addOrEdit(row?, rowItem?) {
      let dialogComponentName = this.componentDetailName;
      if (rowItem) {
        dialogComponentName = rowItem.component.name;
      }
      //console.log(row);
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(<any>this.componentRegistryService.getComponentByName(dialogComponentName),//dialogConfig);
      {
        panelClass: ['dapper-detail-dialog', 'add-post', dialogComponentName],
        data: {
          title: this.title,
          row: row
        }  ,
        maxHeight: '100vh'    
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);

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

    save()
    {
      const baiViet1 = new CreateBaiVietDto();
      baiViet1.init(this.baiviet);
      this._baiVietServiceProxy.create(baiViet1).subscribe((_res) => {
      });

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
                component: r.component,
                callbackFunction: (row, rowItem) => this.addOrEdit(row, rowItem)
              };
            })
          }
        };
      });
    }
}