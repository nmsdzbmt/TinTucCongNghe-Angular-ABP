import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
//import { TableOverViewModel } from '@shared/components/overview-page/overview-page';
import { CreateTheLoaiDto, TheLoaiDto, TheLoaiServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ActionButtonTemplate, ActionType, HeaderTemplate, TableOverViewModel } from '@shared/components/overview-page/overview-page';
import { ComponentRegistryService } from '@shared/services/component-registry/component-registry.service';
import * as _ from 'lodash-es';

// import { log } from 'console';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
    group = null;
    parent = null;
    actions: ActionButtonTemplate[];
    headers: HeaderTemplate[] = [];
    tableOverViewModel: TableOverViewModel;
    title: string;
    icon: string;
    theLoai:TheLoaiDto;
    head:any;
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
        private readonly _theLoaiServiceProxy: TheLoaiServiceProxy,
        private readonly _activatedRoute: ActivatedRoute,
        private breakpointObserver: BreakpointObserver,
        private dialog: MatDialog,
        private componentRegistryService: ComponentRegistryService,
   
    ) { }

    ngAfterViewInit(): void {     

       
    }
    ngOnInit() {
      this.title="Quản lý các thể loại"
      this.hh='[';
      // this.hh+='{"header":{"title":"STT","css":{"class":"text-center wh width-1"}},"row":{"css":"text-right","items":[{"type":"view","key":"stt","value":"","css":{"class":"display inline-block wh min-width-20 bold text-right pm margin-r-10 padding-0"}}]}},';
      this.hh+='{"header":{"title":"Tên thể loại","css":{"class":"wh width-120"}},"row":{"css":"","items":[{"type":"view","key":"name","value":"","css":{"class":""}}]}},' ;
      this.hh+='{"header":{"title":"Vị trí","css":{"class":""}},"row":{"css":"","items":[{"type":"view","key":"location","value":"","css":{"class":""}}]}},';
      this.hh+='{"header":{"title":"Đường dẫn","css":{"class":"wh width-250"}},"row":{"css":"","items":[{"type":"view","key":"slug","value":"","css":{"class":""}}]}},';
      this.hh+='{"header":{"title":"Trạng thái","css":{"class":"text-center wh width-100"}},"row":{"css":"text-center","items":[{"type":"view","key":"status","value":"","css":{"class":"app-border radius-20 display inline-block text-center wh width-p-100 pm padding-tb-2 label label-default text font size-12"}}]}},';
      this.hh+='{"header":{"title":"","css":{"class":"wh width-1"}},"row":{"css":"","items":[{"type":"button","key":"","value":"Sửa","css":{"icon":"fa fa-pencil-square-o","class":"btn btn-primary"},"component":{"code":"","name":"AddCategoryComponent","params":[]}}]}}';
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
      //console.log(this.actions);
      
        return this._theLoaiServiceProxy.getAll("1",0,9999).subscribe(result => {console.log(result.items);console.log(result);
         
       // console.log(this.headers);
        
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
        panelClass: ['dapper-detail-dialog', 'add-category', dialogComponentName],
        data: {
          title: this.title,
          row: row
        }       
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);

      });

    }
  
    deleteSelection(ids:string) {
      console.log(ids);
      
      // const deletes = ids.map( m => new TheLoaiDto({id: m}));
      this._theLoaiServiceProxy.delete(ids).subscribe(res => {
        // this.valueData = null;
        this.refresh();
        abp.notify.success('Xóa thành công.', 'Xóa', { position: 'top-end' });
      });
    }

    refresh(): void {
      window.location.reload();
  }

    save()
    {
      const theLoai1 = new TheLoaiDto();
      theLoai1.init(this.theLoai);
      this._theLoaiServiceProxy.create(theLoai1).subscribe((res) => {
        
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
