import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { TableHeaderModel, TableFilterModel } from '@app/shared/_models/table';
import { Event } from '@angular/router';
import * as _ from 'lodash';
import { UtilityService } from '@app/shared/provider/services/utility.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-table-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class TableDefaultComponent  implements OnChanges{

  @Input('headers') headers: TableHeaderModel[] = [];
  @Input('listData') listData: any[] = [];
  @Input('listFilter') listFilter:TableFilterModel[];
  @Input('trPreviousTemplate') trPreviousTemplate: TemplateRef<any>;
  @Input('trNextToTemplate') trNextToTemplate: TemplateRef<any>;
  @Input('search') search:any = {
    key: 'name',
    value: '',
    callBack: null
  };

  @Input('textButtonAdd') textButtonAdd:string = 'Thêm';

  /* #region  crud */
  @Input('filter') filter = true;
  @Input('add') add = true;
  @Input('edit') edit = true;
  @Input() checked : boolean;
  @Output('onAdd') onAdd = new EventEmitter<any>();
  @Output('onEdit') onEdit = new EventEmitter<any>();

  keySort = null;
  valueSort = null;

  /* #endregion */

  constructor(
    public readonly _ut: UtilityService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    _.each(this.listData, item => {
      item._entityId = UUID.UUID();
    });
  }

  getHidden(index) {

    var header = this.headers[index];
    if (header.style && header.style.hidden) return true;
    return false;
  }

  getAlign(index) {

    var result = this.headers[index];
    if (result.style && result.style.align) {
      switch (result.style.align) {
        case 'right':
          return 'text-right';
        case 'center':
          return 'text-center';
        default:
          return 'text-left';
      }
    }
    return 'text-left';
  }

  setMarginOrder(data) {
    if (data.order) {
      var num = (data.order - 1) * 20 + 15;
      return 'padding-l-' + num;
    }
    return null;
  }

  getWidth(index) {
    var header = this.headers[index];
    if (header.style && header.style.width) return header.style.width;
    return null;
  }

  onClick(data, type) {
    if (type == 'add')
      this.onAdd.emit(data);
    else if (type == 'edit')
      this.onEdit.emit(data);
  }

  setHidden(index) {
    var header = this.headers[index];
    if (header.style && header.style.hidden) header.style.hidden = false;
    else {
      if (!header.style) header.style = { hidden: true };
      header.style.hidden = true;
    }
  }

  checkItemFilter(obj, id){
    return obj.idSelect == id;
  }

  selectItemFilter(item, itemSelect){

    var flag = this.checkItemFilter(item, itemSelect.id);
    if(flag){
      item.idSelect = null;
      item.nameSelect = null;
    }
    else{
      item.idSelect = itemSelect.id;
      item.nameSelect = itemSelect.name;
    }
    item.callBack(item.key, item.idSelect, item.nameSelect);
  }


  getIndexByEntityId(id){
    return _.findIndex(this.listData, ['_entityId', id]);
  }

  getDataByEntityId(id){
    return _.find(this.listData, ['_entityId', id]);
  }

  sort(index) {

    if (index != -1) {
      this.headers[index].order = this.headers[index].order == 'asc' ? 'desc' : 'asc';

      _.each(this.headers, (item, i) => {
        if (i != index && item.order) item.order = 'asc';
      });

      this.keySort = [this.headers[index].key];
      this.valueSort = [this.headers[index].order];
    }
  }


  resetSort(){

    _.each(this.headers, (item, i) => {
      if(item.order){
        item.order = 'asc';
      }
    });
    this.search.value = null;
    this.keySort = null;
  }

}
