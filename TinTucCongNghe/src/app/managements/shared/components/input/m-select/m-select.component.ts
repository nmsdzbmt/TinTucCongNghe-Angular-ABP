import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '@app/shared/_base/_input.component';

@Component({
  selector: 'm-select',
  templateUrl: './m-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MSelectComponent),
      multi: true
    }
  ]
})
export class MSelectComponent extends BaseInputComponent  {}
