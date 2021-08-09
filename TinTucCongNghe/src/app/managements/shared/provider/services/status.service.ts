import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private listStatus = [
    {
        id: 'ACTIVE',
        name: 'Cho phép'
    },
    {
        id: 'BLOCK',
        name: 'Khóa'
    },
]

  getListStatus(){
    return _.cloneDeep(this.listStatus);
  }
}
