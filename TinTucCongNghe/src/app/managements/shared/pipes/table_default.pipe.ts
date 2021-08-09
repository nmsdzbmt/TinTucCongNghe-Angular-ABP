import { Pipe, PipeTransform } from '@angular/core';
import { UtilityService } from '@app/shared/provider/services/utility.service';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Pipe({
    name: 'tableDefaultPipe',
    pure: false
})
export class TableDefaultPipe  implements PipeTransform {

    constructor(
        private readonly _utilityService:UtilityService
    ){
    }
    
	transform(array:any[], search:any, keySearch:string, sortKey, sortValue): any {
          
        var array2 = array;
         
        if(search && search != ''){
            array2 = this._utilityService.filterContains(array, keySearch, search)
        }
 
        if(sortKey && sortValue)
            array2 = _.orderBy(array2, sortKey, sortValue);

        return array2;
	}
}
