import { TemplateRef } from "@angular/core";

export class InitFormModel {
    name:string;
    validators?:string[];
}

export class ModalConfigFormInputModel{
    key:string;
    name?:string;
    type?:string = 'text' || 'number' || 'select' || 'textarea' ||'date';
    typeUpdateValue?:string = 'input'|| 'change' || 'blur';
    placeholder?:string;
    template?:TemplateRef<any>;
    style?:ConfigStyleInputModel;
    listSelect?:any[]; // id value
    listError?:KeyValueModel[];
}

export class KeyValueModel{
    key:string;
    value?:string;
}

export class ConfigStyleInputModel{
    stackCss?:string; // sap xep col-1 den 12
    inputCss?:string; // calss css nhu has-error | hass - warning
    type?:string = 'vertical' || 'vertical_icon'; // input hang doc hoac ngang
    icon?:string; // icon cua input
    alignIcon?:string = 'left' || 'right'; // vij tri icon
}
