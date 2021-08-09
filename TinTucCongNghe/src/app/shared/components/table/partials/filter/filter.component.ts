import { Component, OnInit, Input, Output } from '@angular/core';
import { TableHeaderModel, TableFilterModel } from '@app/shared/_models/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input('headers') headers: TableHeaderModel[] = [];
  @Input('listFilter') listFilter:TableFilterModel[];
  @Input('controlSearch') controlSearch:FormControl;
  @Input('search')   search:any = {
    key: '',
    value: '',
    callBack: null
  }

  constructor() { }

  ngOnInit() {
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
  
  
  setHidden(index) {
    var header = this.headers[index];
    if (header.style && header.style.hidden) header.style.hidden = false;
    else {
      if (!header.style) header.style = { hidden: true };
      header.style.hidden = true;
    }
  }
  getHidden(index) {
    var header = this.headers[index];
    if (header.style && header.style.hidden) return true;
    return false;
  }

  changeValueSearch($event){
    var flag = $event 
    if(this.search.callBack)
      this.search.callBack();
  }
}
