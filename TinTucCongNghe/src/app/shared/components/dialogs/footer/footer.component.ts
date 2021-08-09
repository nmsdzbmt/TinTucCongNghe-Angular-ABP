import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'modal-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  @Input('isNew') isNew = true;
  @Input('statusForm') statusForm = true;
  @Output('onSave') onSave = new EventEmitter<any>();
  @Output('onDelete') onDelete = new EventEmitter<any>();

  confirm: boolean = false;
  
  constructor(
    public readonly modalRef: BsModalRef
  ) { }

  cancelDelete() {
    this.confirm = false;
  }

  confirmDelete() {
    this.confirm = true;
  }

  delete() {
    this.onDelete.next('onDelete');
  }

  save() {
    this.onSave.next('onSave');
  }

}
