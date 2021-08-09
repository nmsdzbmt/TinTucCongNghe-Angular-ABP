// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// import { CommonModule } from "@angular/common";

// import {
//   BsDropdownModule,
//   CollapseModule,
//   BsDatepickerModule,
//   TabsModule,
//   ModalModule,
//   TypeaheadModule,
//   BsLocaleService,
//   TimepickerModule,
//   setTheme,
// } from "ngx-bootstrap";

// import { AvatarModule } from "ng2-avatar";
// import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// // import { HotTableModule } from "@handsontable/angular";
// import { NgxTagsInputModule } from "ngx-tags-input";
// import { SidebarModule } from "ng-sidebar";
// import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// import { NgxPaginationModule } from "ngx-pagination";

// import { defineLocale } from "ngx-bootstrap/chronos";
// import { viLocale } from "./i18n/vi";
// import { DateTimeService } from "./provider/services/date-time.service";

// import { InfiniteScrollModule } from "ngx-infinite-scroll"; 
// import { MathjaxService } from "./provider/services/mathjax.service";
// import { CoreModule } from "@core/core.module";
// import { NgxImageCompressService } from "ngx-image-compress";
// import { NgxPrintModule } from "ngx-print"; 
// import { NgxViewerModule } from "ngx-viewer";
// import { ValidatorsService } from "./provider/services/validators.service";
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// // import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { FilesComponent } from "./components/files/files.component";
// import { TagInputModule } from 'ngx-chips';
// import { ButtonComponent } from './components/button/button.component';
// import { UtilityService } from "./provider/services/utility.service";
// import { MTextComponent } from './components/input/m-text/m-text.component';
// import { MNumberComponent } from './components/input/m-number/m-number.component';
// import { MSelectComponent } from './components/input/m-select/m-select.component';
// import { MTextareaComponent } from './components/input/m-textarea/m-textarea.component';
// import { NotifyErrorComponent } from './components/input/notify-error/notify-error.component';
// import { HeaderComponent } from "./components/dialogs/header/header.component";
// import { FooterComponent } from "./components/dialogs/footer/footer.component";
// import { CrudComponent } from "./components/dialogs/crud/crud.component";
// import { MDateComponent } from './components/input/m-date/m-date.component';
// import { MPasswordComponent } from './components/input/m-password/m-password.component';
// import { FormService } from "./provider/services/form.service";
// import { TableDefaultComponent } from "./components/table/default/default.component";
// import { TableDefaultPipe } from "./pipes/table_default.pipe";
// import swal from "sweetalert";
// import { SwalService } from "./provider/services/swal.service";
// import { ViewFileComponent } from './components/view-file/view-file.component';
// import { TableFilterComponent } from './components/table/partials/filter/filter.component';
// import { MathJaxDirective } from "./provider/directives/mathjax.directive";
// import { NgxSummernoteModule } from "ngx-summernote";
// import { TableExtendComponent } from './components/table/extend/extend.component';
// import { Homepageervice } from "./provider/services/category.service";
// import { TranslateModule } from "@ngx-translate/core";

// defineLocale("vi", viLocale);

// @NgModule({
//   declarations: [
//     //components
//     CrudComponent,
//     FilesComponent,
//     ButtonComponent,
//     MTextComponent,
//     MNumberComponent,
//     MSelectComponent,
//     MTextareaComponent, 
//     MSelectComponent, 
//     NotifyErrorComponent, HeaderComponent, FooterComponent, MDateComponent, MPasswordComponent, TableDefaultComponent,
//     TableDefaultPipe,
//     ViewFileComponent,
//     TableFilterComponent,
//     MathJaxDirective,
//     TableExtendComponent
//   ],
//   imports: [
//     CommonModule,
//     CollapseModule.forRoot(),
//     FormsModule,
//     ReactiveFormsModule,
//     BsDatepickerModule.forRoot(),
//     TabsModule.forRoot(),
//     ModalModule.forRoot(),
//     AvatarModule.forRoot(),
//     BsDropdownModule.forRoot(),
//     TypeaheadModule.forRoot(),
//     TimepickerModule.forRoot(),
//     TranslateModule.forChild(),
//     PerfectScrollbarModule,
//     NgbModule,
//     NgxPaginationModule,
//     SidebarModule.forRoot(),
//     NgxTagsInputModule,
//     // HotTableModule,
//     InfiniteScrollModule,
//     NgxPrintModule,
//     NgxViewerModule,
//     NgMultiSelectDropDownModule,
//     // NgxDatatableModule,
//     TagInputModule,
//     NgxSummernoteModule
//   ],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   exports: [
//     //components
//     CrudComponent, 
//     FilesComponent, ViewFileComponent,
//     ButtonComponent,
//     HeaderComponent, FooterComponent,TableDefaultComponent,
//     TableExtendComponent,
//     MNumberComponent,
//     MTextComponent,
//     MTextareaComponent,
//     MSelectComponent,MDateComponent,MPasswordComponent,
//     NotifyErrorComponent,
//     TableFilterComponent,
//     // module
//     CollapseModule,
//     FormsModule,
//     ReactiveFormsModule,
//     BsDatepickerModule,
//     TabsModule,
//     ModalModule,
//     AvatarModule,
//     BsDropdownModule,
//     TypeaheadModule,
//     PerfectScrollbarModule,
//     NgbModule,
//     CommonModule,
//     NgxPaginationModule,
//     SidebarModule,
//     NgxTagsInputModule,
//     // HotTableModule,
//     TimepickerModule,
//     InfiniteScrollModule,
//     CoreModule,
//     NgxPrintModule,
//     NgxSummernoteModule,

//     //directives
//     NgMultiSelectDropDownModule,
//     // NgxDatatableModule,
//     MathJaxDirective,
//     //pipe
//     // FilterPipe
//     TagInputModule, 
//   ],
//   providers: [
//     DateTimeService,
//     MathjaxService,
//     NgxImageCompressService,
//     ValidatorsService,
//     UtilityService,
//     FormService,
//     SwalService,
//     Homepageervice
//   ],
//   entryComponents: [
//     CrudComponent, ViewFileComponent
//   ],
// })
// export class SharedModule {
//   constructor(private bsLocaleService: BsLocaleService) {
//     setTheme('bs3'); // or 'bs4'
//     this.bsLocaleService.use("vi");
//   }
// }
