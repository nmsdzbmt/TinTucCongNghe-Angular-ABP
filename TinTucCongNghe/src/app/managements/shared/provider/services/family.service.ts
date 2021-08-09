import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  listRelationship = [
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

  constructor() { }

  public getValueByKey(key) {
    var relationShip = this.listRelationship.find(item => {
      return item.key == key;
    });

    return relationShip ? relationShip.value : null;
  }

}
