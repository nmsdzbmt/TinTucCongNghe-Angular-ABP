import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { UtilityService } from '@app/shared/provider/services/utility.service';

@Component({
  selector: 'app-table-extend',
  templateUrl: './extend.component.html',
  styleUrls: ['./extend.component.scss']
})
export class TableExtendComponent implements OnInit, OnChanges {

  @Input('data') data: any[] = [];
  @Input('managementColumnName') managementColumnName = [];
  managementSortFilter = {};

  iconSort = [
      {
          type: 'alpha',
          asc: 'fa fa-sort-alpha-asc',
          desc: 'fa fa-sort-alpha-desc'
      },
      {
          type: 'numeric',
          asc: 'fa fa-sort-amount-asc',
          desc: 'fa fa-sort-amount-desc'
      }
  ];

  search = {
      searchText: '',
      propertyName: null
  };

  levelSort: any[];

  constructor(
    public readonly _ut:UtilityService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['managementColumnName']) {
          this.managementColumnName = changes['managementColumnName'].currentValue;
          this.initSort();
          this.initDataLevelSort();
      }
  }

  ngOnInit() {
  }

  initDataLevelSort() {
      this.levelSort = [null];

      this.managementColumnName.filter(e => e.sort);

      this.managementColumnName.forEach((e, i) => {
          this.levelSort.push(i + 1);
      });
  }

  initSort() {
      this.managementColumnName.forEach(e => {
          this.managementSortFilter[e.propertyName] = {
              order: 'asc',
              // sort: true,
              filter: false
          }
      });
  }

  thayDoiUuTienSort(_objectChange, priority) {
      let found = this.managementColumnName.find(o => o.prioritySort == priority);
      if (found && found.propertyName == _objectChange.propertyName) {
          return;
      }
      if (priority && priority != '') {
          this.managementColumnName.forEach(o => {
              if (o.prioritySort >= priority && found) {
                  o.prioritySort = null;
              }
          });
      }
      _objectChange.prioritySort = priority;
      let fieldSort = _.sortBy(this.managementColumnName.filter(o => o.prioritySort != null), ['prioritySort'], ['asc']).map(e => e.propertyName);
      this.data = this.sortData(this.data, fieldSort, 'asc') as any[];
  }

  sortData(list, field, sort) {
      let orderBy = [];
      field.forEach(e => orderBy.push(sort));
      return _.sortBy(list, field, orderBy);
  }

  filter(event, propertyName: any) {
      this.search.propertyName = propertyName;
      this.search.searchText = event;
  }

  getIcon(type, order) {
      return this.iconSort.find(e => e.type == type)[order];
  }

  getValueProperty(propertyName: string, std) {
      let properties = propertyName.split('.');
      let value = std;
      if (properties.length > 0) {
          properties.forEach(p => {
              value = value[p];
          });
          return value;
      } else {
          return value[propertyName];
      }
  }
  
  refreshData() {
      this.search = {
          searchText: '',
          propertyName: ''
      }
  }
}
