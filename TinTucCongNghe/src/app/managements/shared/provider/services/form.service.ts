/* #region  import */
import { Injectable, TemplateRef } from '@angular/core';
import * as _ from 'lodash';
import { FormGroup, AbstractControl, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { InitFormModel, ModalConfigFormInputModel, ConfigStyleInputModel, KeyValueModel } from '@app/shared/_models/form';
import { listenOnPlayer } from '@angular/animations/browser/src/render/shared';

@Injectable({
  providedIn: 'root'
})
/* #endregion */
export class FormService {

  constructor(
  ) { }

  initForm(listControl:InitFormModel[], data){
    if(data == null) data = {};
    var form = new FormGroup({});

    _.each(listControl, control => {
      var value = null;
      if(data[control.name] || (!data[control.name] && data[control.name] == 0) ){
        value = data[control.name];
      }

      var absControl = new FormControl(value);
      var listValidator:ValidatorFn[] = [];

      _.each(control.validators, validator => {
        switch (validator) {
          case 'email': 
            listValidator.push(Validators.email);
            break;
          case 'required':
            listValidator.push(Validators.required);
            break;
        }
      })

      absControl.setValidators(listValidator);

      this.addControl(form, control.name, absControl);
    })
    return form;
  }

  addConfigControl(list:InitFormModel[], name:string, validator?:string[]){
    list.push({
      name: name,
      validators: validator
    })
  }

  buildLayoutForm(list:ModalConfigFormInputModel[], key, name, type, typeUpdateValue?, placeholder?:string, template?:TemplateRef<any>, style?:ConfigStyleInputModel, listSelect?:any[], listError?:KeyValueModel[] ){
    list.push({
      key: key,
      name: name,
      type: type,
      typeUpdateValue: typeUpdateValue,
      placeholder: placeholder,
      template: template,
      style: style,
      listSelect: listSelect,
      listError: listError
    })
  }
  
  setupDataForm(form:FormGroup, listControl:InitFormModel[], data:any){
    _.each(listControl, item => {
      this.setValue(form, item.name, data[item.name]);
    });
  }

  addControl(form:FormGroup, name, control:AbstractControl){
    form.addControl(name, control);
  }

  setValidators(form:FormGroup, name, newValidator: ValidatorFn | ValidatorFn[] | null){
    form.get(name).setValidators(newValidator);
  }

  setValue(form:FormGroup, name:string, value:any){
    form.get(name).setValue(value);
  }
}
