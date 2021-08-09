import { Component, OnInit, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from 'events';
import { BaseInputComponent } from '@app/shared/_base/_input.component';

@Component({
  selector: 'm-number',
  templateUrl: './m-number.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MNumberComponent),
      multi: true
    }
  ]
})

export class MNumberComponent extends BaseInputComponent{}