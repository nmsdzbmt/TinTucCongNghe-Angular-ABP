/* #region  import */
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, ValidationErrors, FormControl, ValidatorFn, FormGroup, AsyncValidatorFn } from '@angular/forms';
import * as _ from 'lodash';
import { Observable, Subscription, of } from 'rxjs';
import { map, tap, switchMap, first, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/* #endregion */
export class ValidatorsService {

  
  EMAIL_REGEXP: RegExp = /^[a-z0-9]+([a-z0-9\_.]*[\.]*)[a-z0-9]+@[a-z0-9]+([a-z0-9]+\.)+[a-z0-9]{2,}$/;
	// PHONE_REGEXP: RegExp = /^(012|09)[0-9]{8}$|^(08[689]|016[2-9]|^018[68])[0-9]{7}$|^0199[0-9]{6}$/;
	// PHONE_REGEXP: RegExp = /^((09)[0-9]|(08)[1-6]|(07)[6-9]|(05)[8-9]|(03)[2-9]|(088)|(056)|(070))[0-9]{7}$/;
	PHONE_REGEXP: RegExp = /^[0-9]{10}$/;
  // TIME_REGEXP: RegExp = /^\d{2}:\d{2}\s{1}-\s{1}\d{2}:\d{2}[\s]+[\s\w]*$/;
  
  constructor(
  ) { }


	phoneValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			if (control.value == null || control.value == '' || control.value == undefined)
				return null;
			const phone = this.PHONE_REGEXP.test(control.value);
			return phone ? null : { 'phone': { value: control.value } };
		};
  }
  
  /* #region   kiem tra index trung thieo cap bac cha con */
  setValidatorIndex(parentId: FormControl, list: any[], currentId: FormControl): ValidatorFn {

    return (index: AbstractControl): { [key: string]: any } | null => {

      var arr = list;
      if (parentId.value) {
        var parent = _.find(list, ['id', parentId.value]);
        var code = parent.code + '.';
        var order = parent.order + 1;
        arr = _.filter(list, item => {
          return _.startsWith(item.code, code) && order == item.order && item.id != currentId.value;
        });

      }
      else {
        arr = _.filter(list, item => {
          return !item.parentId && item.id != currentId.value;
        });
      }
      var found = _.find(arr, ['index', parseInt(index.value)]);
      return found ? { 'duplicate': true } : null;

    }
  }
  /* #endregion */

  /* #region  kiem tra index trung` (k cha con) */
  setValidatorIndex2(list: any[], currentId: FormControl): ValidatorFn {

    return (index: AbstractControl): { [key: string]: any } | null => {

      var found = _.find(list, item => {
        return item.index == parseInt(index.value) && item.id != currentId;
      });

      return found ? { 'duplicate': true } : null;

    }
  }
  /* #endregion */


  /* #region  kiem tra mat khau */
  comparePassword = (control: AbstractControl): { [key: string]: any } | null => {
    return control.get('password').value == control.get('passwordConfirm').value ? null : { 'notSame': true }
  };

  /* #endregion */

  /* #region  so sanh 2 gia tri = nhau */
  compareEqualValue(controlB: FormControl) {

    return (controlA: AbstractControl): { [key: string]: any } | null => {
      var valueA = controlA.value;
      var valueB = controlB.value
      return valueA === valueB ? null : { notSame: true }
    }
  }
  /* #endregion */

  /* #region  nut cho phep */
  checkAcceptTerm(control: AbstractControl): ValidationErrors {
    return control.value ? null : { 'acceptTerm': true };
  }
  /* #endregion */

  /* #region  reset lai validation cua control */
  resetValidation(control: FormControl) {
    control.updateValueAndValidity();
  }
  /* #endregion */

  // checkDuplicateUserName(ssoService: SSOServiceProxy, cdr: ChangeDetectorRef): AsyncValidatorFn {
	// 	return (control: AbstractControl): Observable<ValidationErrors | null> => {
	// 		if (control.value == null || control.value == '' || control.value == undefined)
	// 			return of(null);
	// 		return ssoService.checkEmailAddressOrUserName({ userName: control.value }).pipe(
	// 			map(
	// 				response => {
	// 					return response == true ? { "duplicateUserName": true } : null;
	// 				}
	// 			),
	// 			catchError(() => of(null)),
	// 			tap(
	// 				(respone) => {
	// 					cdr.markForCheck();
	// 				}
	// 			)
	// 		);
	// 	};
  // }
  
}
