import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'modal-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent  {

  @Input('title') title = null;

  constructor(
    public readonly modalRef: BsModalRef
  ) { }
}
