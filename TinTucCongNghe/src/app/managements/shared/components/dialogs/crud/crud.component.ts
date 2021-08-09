import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, AfterContentInit, ChangeDetectionStrategy, Injector, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';
import { BaseModalComponent } from '@app/shared/_base/_modal.component';
import { FormControl, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'modal-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent extends BaseModalComponent implements AfterViewInit {

  constructor(ịnjector: Injector) {
    super(ịnjector);
  }
  ngAfterViewInit(): void {
  }

  isHasError(key) {
    return this.form && this.form.dirty && this.form.get(key) && this.form.get(key).dirty && this.form.get(key).errors;
  }

}
