import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '@app/shared/_base/_input.component';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'm-date',
  templateUrl: './m-date.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MDateComponent),
      multi: true
    }
  ]
})
export class MDateComponent extends BaseInputComponent {

}
