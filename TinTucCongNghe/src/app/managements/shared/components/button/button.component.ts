import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input('key') key = null;

    @Input('text') text: string = null;
    @Input('icon') icon: string = null;
    @Input('iconAlign') iconAlign: string = 'left';
    @Input('classCssText') classCssText: string = null;
    @Input('classCssButton') classCssButton: string = null;
    @Input('placeholder') placeholder: string = null;
    @Input('valid') valid:boolean|string = true;

    @Output('callBack') callBack = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    onClick() {
        if(this.valid) 
            this.callBack.emit();
    }
}
