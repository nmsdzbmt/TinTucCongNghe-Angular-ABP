import { LocaleData } from "ngx-bootstrap";

// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return


//! moment.js locale configuration
//! locale : Việt Nam [vi]
//! author : Chris Gedrim : https://github.com/chrisgedrim

export const viLocale: LocaleData = {
  abbr: 'vi',
  months : 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12'.split('_'),
  monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
  monthsParseExact: true,
  weekdays : 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy'.split('_'),
  weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  weekdaysParseExact : true,
  meridiemParse: /sa|ch/i,
  isPM(input: string): boolean {
    return /^ch$/i.test(input);
  },
  meridiem(hours: number, minutes: number, isLower: boolean): string {
    if (hours < 12) {
      return isLower ? 'sa' : 'SA';
    } else {
      return isLower ? 'ch' : 'CH';
    }
  },
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM [năm] YYYY',
    LLL : 'D MMMM [năm] YYYY HH:mm',
    LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
    l : 'DD/M/YYYY',
    ll : 'D MMM YYYY',
    lll : 'D MMM YYYY HH:mm',
    llll : 'ddd, D MMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Hôm nay lúc] LT',
    nextDay: '[Ngày mai lúc] LT',
    nextWeek: 'dddd [tuần tới lúc] LT',
    lastDay: '[Hôm qua lúc] LT',
    lastWeek: 'dddd [tuần trước lúc] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : '%s tới',
    past : '%s trước',
    s : 'vài giây',
    ss : '%d giây' ,
    m : 'một phút',
    mm : '%d phút',
    h : 'một giờ',
    hh : '%d giờ',
    d : 'một ngày',
    dd : '%d ngày',
    M : 'một Tháng',
    MM : '%d Tháng',
    y : 'một năm',
    yy : '%d năm'
  },
  dayOfMonthOrdinalParse: /\d{1,2}/,
  ordinal(_num: number): string {
    return '' + _num;
  },
  week : {
    dow : 1, // Thứ Hai là ngày đầu tuần.
    doy : 4  // Tuần chứa ngày 4 Tháng 1 là tuần đầu tiên trong năm.
  }
};