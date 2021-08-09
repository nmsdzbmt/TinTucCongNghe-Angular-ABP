import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '@app/shared/_base/_input.component';

@Component({
  selector: 'm-password',
  templateUrl: './m-password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MPasswordComponent),
      multi: true
    }
  ]
})

export class MPasswordComponent extends BaseInputComponent{}