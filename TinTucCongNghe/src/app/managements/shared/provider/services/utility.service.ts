import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
    providedIn: "root"
})
export class UtilityService {

    constructor(
        private readonly _domSanitizer:DomSanitizer
    ) { }

    /* #region  tim kiem va lay 1 gia tri trong object */
    findPick(arr, key, value, pick) {
        var found = _.find(arr, [key, value]);
        return found ? found[pick] : null;
    }
    /* #endregion */

    find(arr, value){
        return _.find(arr, item => {
            return item == value;
        });
    }

    
    findValueOject(arr, key, value) {
        return _.find(arr, [key, value]);
    }

    filter(arr, value){
        return _.filter(arr, item => {
            return item == value;
        });
    }

    filterValueObject(arr, key, value) {
        return _.filter(arr, [key, value]);
    }

    filterContains(arr, key, value) {
        return _.filter(arr, item => {
            if(item[key]){
                return this.convertViToEng(JSON.stringify(item[key])).toLowerCase().indexOf(this.convertViToEng(value.toLowerCase())) != -1;
            }
            return false;
        })
    }

    convertViToEng(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        return str;
    }

    safeCode(code) {
        return this._domSanitizer.bypassSecurityTrustHtml(code);
    }
}
