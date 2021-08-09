import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

export class BaseInputComponent implements ControlValueAccessor  {
  
  // id input
  @Input('id') id = null; 

  // name input
  @Input('name') name = null;
  @Input('title') title = null;
  @Input('placeholder') placeholder = null;
  @Input('readonly') readonly = false;
  @Input('classCssInput') classCssInput = null;
  @Input('classCssWrap') classCssWrap = null;

  @Input('valueDefault') valueDefault = null;
  
  // loai input
  @Input('type') type = 'vertical' || 'vertical_icon';

  // loai cap nhat du lieu
  @Input('typeUpdateValue') typeUpdateValue = 'input'|| 'change' || 'blur';

  // css icon
  @Input('icon') icon = null;

  // cho icon sang trai hoac phai
  @Input('alignIcon') alignIcon = 'left' || 'right';

  // bao loi
  @Input('error') error:any;

  // list dnah cho select
  @Input('list') list = [];
  @Input('formControl') formControl:FormControl = null;
  
  @Output('eventOnChange') eventOnChange = new EventEmitter<any>();
  @Output('onClickIcon') onClickIcon = new EventEmitter<any>();
  
  onChange: (obj: any) => void;

  constructor() { }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  handler(value){
     
    try{
      this.onChange(value);
      this.eventOnChange.emit(value);
    }
    catch{
      console.log('chua truyen ngmodel hoac control')
    }

  }
  
}
