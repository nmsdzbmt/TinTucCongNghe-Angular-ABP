import { PagedRequestDto } from './../../paged-listing-component-base';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { appModuleAnimation } from '@shared/animations/routerTransition';
//import { PagedRequestDto } from '@shared/paged-listing-component-base';
import { ActionButtonTemplate, FilterOverviewModel, TableOverViewModel } from './overview-page';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  //animations: [appModuleAnimation()]
})
export class OverviewPageComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() actions: ActionButtonTemplate[];
  @Input() tableOverViewModel: TableOverViewModel;
  @Input() filterData: FilterOverviewModel[];
  @Input() importCode: string;

  @Input() selectionTitle: string;
  @Input() selectionIcon: string;

  @Output() importSuccess = new EventEmitter();
  @Output() pageChange = new EventEmitter<PagedRequestDto>();
  @Output() selectionButtonClick = new EventEmitter<string[]>();
  @Output() filterChange = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();

  selectionIds = [];

  constructor() { }

  ngOnInit(): void { }

  clickSelectionButton() {
    ;
    abp.message.confirm(null, `Bạn có chắc chắn?`, (res) => {
      if (res) this.selectionButtonClick.emit(this.selectionIds);
    });
  }

  modelChange(item): void {
    this.filterChange.emit(item);
  }

  receiveData(textSearch: string) {
    this.searchChange.emit(textSearch);
  }
}
