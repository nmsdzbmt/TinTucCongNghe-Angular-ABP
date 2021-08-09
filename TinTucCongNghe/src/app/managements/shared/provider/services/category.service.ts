import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class Homepageervice {

  private listRelationship = [
    {
      'key': 'PARENT',
      'value': 'Phụ huynh',
    },
    {
      'key': 'FATHER',
      'value': 'Bố'
    },
    {
      'key': 'MOTHER',
      'value': 'Mẹ'
    }
  ]

  constructor(
  ) { }


  getRelationShip(){
    return _.cloneDeep(this.listRelationship);
  }
}
