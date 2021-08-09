import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '@app/shared/_base/_input.component';

@Component({
  selector: 'm-textarea',
  templateUrl: './m-textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MTextareaComponent),
      multi: true
    }
  ]
})
export class MTextareaComponent extends BaseInputComponent{}