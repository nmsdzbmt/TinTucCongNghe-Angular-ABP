import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BaseInputComponent } from '@app/shared/_base/_input.component';

@Component({
  selector: 'm-text',
  templateUrl: './m-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MTextComponent),
      multi: true
    }
  ]
})
export class MTextComponent extends BaseInputComponent  {}
