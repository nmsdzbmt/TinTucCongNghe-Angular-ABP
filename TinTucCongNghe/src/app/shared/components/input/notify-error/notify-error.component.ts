import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { validator } from 'jquery';

@Component({
  selector: 'app-notify-error',
  templateUrl: './notify-error.component.html',
})
export class NotifyErrorComponent {
  @Input('form') form:FormGroup;
  @Input('key') key:string = null;
  @Input('content') content = null;

  check(){
     
    if(!this.form || !this.key) return false;
     
    var list = this.key.split('.');

    if(list.length == 1){
      if(!this.form.errors) return false;
      return this.form.errors[list[0]] && this.form.dirty;
    } 
    else{
      if(!this.form.get(list[0]).errors) return false;
      return this.form.get(list[0]).errors[list[1]] && this.form.get(list[0]).dirty;
    }

  }
}
