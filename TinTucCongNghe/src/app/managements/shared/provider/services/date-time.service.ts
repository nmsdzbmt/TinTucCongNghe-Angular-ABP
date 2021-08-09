import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private formatDefault = 'DD/MM/YYYY';

  constructor() { }


  /* #region  chuyen doi string sang  date */
  convertStringToDate(str, format: string) {
    return new Date(str);
  }
  /* #endregion */

  convertDateUt(date: Date){
    return moment(date).utc().format();
  }

  /* #region  chuyển đổi kiểu ngày tháng sang string theo định dạng. mạc đinh DD/MM/YYYY */
  convertDateToString(date: Date, format: string) {

    format = format == null ? this.formatDefault : format;

    return moment(date).format(format)
  }
  /* #endregion */


  /* #region  so sanh 2 ngay  Nếu ngày A > B => 1 Nếu ngày A < b => -1 Nếu Ngày A = B => 0 */
  compareTwoDay(valueA: Date, valueB: Date): number {

    var strValueA = this.convertDateToString(valueA, 'YYYY-MM-DD');
    var strValueB = this.convertDateToString(valueB, 'YYYY-MM-DD');

    if (strValueA < strValueB) {
      return -1;
    }
    else if (strValueA > strValueB) {
      return 1;
    }
    return 0;
  }
  /* #endregion */

    // trả về tổng số ngày của 1 tháng trong năm đó.
    totalDateOfMonth(m, y) {
      return new Date(y, m + 1, 0).getDate();
    }
    
}
