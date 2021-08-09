import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  initDataExtend(data: any[], dataExtend: any[]) {
    data.forEach((c, i) => {
      if (!dataExtend[c.id]) {
        dataExtend[c.id] = {
          _toggle: false,
          _hasChild: false,
          _show: false
        }
      }

      if (c.parentId == null) {
        dataExtend[c.id]._show = true;
      }

      let nextIndex = i + 1;

      if (nextIndex < data.length) {
        for (let j = i + 1; j < data.length; j++) {
          if (c.groupCode == data[j].groupCode && _.startsWith(data[j].code, `${c.code}.`)) {
            dataExtend[c.id]._hasChild = true;
            break;
          } else {
            dataExtend[c.id]._hasChild = false;
          }
        }
      } else {
        dataExtend[c.id]._hasChild = false;
      }

      if (c.parentId != null
        && dataExtend[c.parentId] != undefined
        && dataExtend[c.parentId]._toggle == true) {
        dataExtend[c.id]._show = true;
      }

      if (dataExtend[c.parentId] != undefined
        && dataExtend[c.parentId]._toggle == false) {
        dataExtend[c.id]._show = false;
      }
    })
  }

  toggle(item: any, dataExtend: any[]) {
    dataExtend[item.id]._toggle = !dataExtend[item.id]._toggle;
    dataExtend.forEach(e => {
      if (dataExtend[item.id]._toggle) {
        if (e.parentId == item.id) {
          dataExtend[e.id]._show = true;
        }
      } else {
        if (_.startsWith(e.code, `${item.code}.`)) {
          dataExtend[e.id]._show = false;
          dataExtend[e.id]._toggle = false;
        }
      }
    })
  }
}
