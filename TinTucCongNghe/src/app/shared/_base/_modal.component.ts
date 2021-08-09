import { Subject } from "rxjs";
import { BsModalRef } from "ngx-bootstrap";
import { Injector, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ModalConfigFormInputModel } from "../_models/form";

export class BaseModalComponent {

    title: string = '';
    isNew: boolean = true;
    form:FormGroup = null;
    nameForm:string = '';
    configLayout:ModalConfigFormInputModel[];

    _modalRef:BsModalRef;
    onSave:Subject<any> = new Subject<any>();
    onDelete:Subject<any> = new Subject<any>();
    onClose:Subject<any> = new Subject<any>();


    dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        itemsShowLimit: 6,
        allowSearchFilter: false,
        enableCheckAll: false
    };
    
    constructor(
        injector: Injector,
    ) {
        this._modalRef = injector.get(BsModalRef)
    }


    delete(data?) {
        this.onDelete.next(data);
        this.hidden();
    }

    save(data?) {
        this.onSave.next(data);
        this.hidden();
    }
    
    close(data?){
        this.onClose.next(data);
        this.hidden();
    }

    hidden(){
        this._modalRef.hide();
    }
    
}