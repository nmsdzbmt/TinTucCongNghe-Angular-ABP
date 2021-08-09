import { TemplateRef } from "@angular/core";

export class TableHeaderModel {
    key?:string;
    keySub?: string;
    value?:string;
    style?:TableHeaderStyleModel;
    order?:string;
    template?:TemplateRef<any>;
    templateChild?: TemplateRef<any>;
    templateChildNextTo?: TemplateRef<any>;
}

export class TableHeaderStyleModel {
    width?:string;
    frozen?:boolean;
    align?:string = 'left' || 'right' || 'center';
    classCss?:string;
    hidden?:boolean;
}

export class TableFilterModel{
    key?:string;
    header?:string
    idSelect?:string
    nameSelect?:string
    template?:TemplateRef<any>;
    listSelect?:TableFilterListSelectModel[];
    callBack?: (key, id, name) => void;
}

export class TableFilterListSelectModel{
    id:string;
    name:string;
}
