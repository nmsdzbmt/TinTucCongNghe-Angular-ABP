//import { CategoryOutputDto } from '@shared/service-proxies/service-proxies';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import * as _ from 'lodash-es';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
//import { CategoryOutputDto, HomepageerviceProxy } from '@shared/service-proxies/data-service-proxies';

export interface DropdownData {
  id: string;
  name: string;
  code?: string; // for deep level
  order?: string; // for deep level
  disabled?: boolean;
  checked?: boolean;
}

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.scss']
})
export class DropdownlistComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() model: string;
  @Input() groupAddonIcon: string;
  @Input() dropdownData: DropdownData[];
  @Input() maxHeight: number;
  @Input() minWidth: number;
  @Input() showSearch: boolean;
  @Input() showEmpty: boolean;
  @Input() disabledIds: string[];

  @Input() defaultName: string;
  @Input() type: string = 'select' || 'checkbox';

  @Input() categoryGroupCode: string; // if has value then load data from HomepageerviceProxy
  //@Output() categoryGroupCodeLoaded = new EventEmitter<CategoryOutputDto[]>();

  @Output() modelChange = new EventEmitter<string>();

  @ViewChild('trigger') buttonTrigger: CdkOverlayOrigin;

  name: string;
  isOpen = false;
  width = 0;
  searchModel: string;
  private orgDropdownData;

  constructor(
    //private HomepageerviceProxy: HomepageerviceProxy
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dropdownData && !changes.dropdownData.firstChange) {
      this.init();
    } else if (changes.model && !changes.model.firstChange) {
      this.buildData();
    } else if (changes.disabledIds && !changes.disabledIds.firstChange) {
      this.disabledItem();
    }
  }

  ngOnInit(): void {
    if (!this.categoryGroupCode) {
      this.init();
    } else this.loadCategoryData();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setWidthDropdownlist();
    });
  }

  searchModelChange(): void {
    const searchModel = _.lowerCase(this.searchModel);
    this.dropdownData = _.filter(this.orgDropdownData, (item) => {
      return _.includes(_.lowerCase(item.code), searchModel) || _.includes(_.lowerCase(item.name), searchModel);
    });
  }

  selectItem(item: DropdownData): void {
    if (item.disabled) {
      return;
    }
    this.name = item.name;

    if (this.type === 'select') this.isOpen = false;

    this.modelChange.emit(item.id);
  }

  setWidthDropdownlist() {
    this.width = this.buttonTrigger.elementRef.nativeElement.offsetWidth;
  }

  private init() {
    this.lowerData();
    this.addEmptyItem();
    this.orgDropdownData = _.cloneDeep(this.dropdownData);
    this.buildData();
    this.disabledItem();
  }

  private buildData(): void {
    if (this.model) {
      this.name = _.find(this.dropdownData, ['id', this.model.toLowerCase()])?.name;
    } else this.name = null;
  }

  private addEmptyItem() {
    if (!this.showEmpty || !this.dropdownData?.length) return;
    this.dropdownData.splice(0, 0, { id: null, name: 'All' });
  }

  private lowerData() {
    _.forEach(this.dropdownData, (d) => {
      d.id = d.id.toLowerCase();
    });
  }

  private disabledItem() {
    const disabledIds = [];
    _.forEach(this.disabledIds, (d) => {
      if (d) disabledIds.push(d.toLowerCase());
    });
    _.forEach(this.dropdownData, (d) => (d.disabled = _.includes(disabledIds, d.id)));
  }

  private loadCategoryData() {
    // this.HomepageerviceProxy
    //   .getList(<any>{
    //     criterias: [{ propertyName: 'groupCode', operation: 'Contains', value: this.categoryGroupCode }]
    //   })
    //   .subscribe((result) => {
    //     this.dropdownData = _.map(result, (r) => {
    //       return { id: r.id, name: r.name };
    //     });
    //     this.categoryGroupCodeLoaded.emit(result);
    //     this.init();
    //   });
  }
}
