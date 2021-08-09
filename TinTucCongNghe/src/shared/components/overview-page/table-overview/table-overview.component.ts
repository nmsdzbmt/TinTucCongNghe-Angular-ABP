import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
 import { PagedListingComponentBase, PagedRequestDto } from '../../../paged-listing-component-base';
// import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { getRealStatus, TableOverViewModel } from '../overview-page';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss']
})
export class TableOverviewComponent extends PagedListingComponentBase implements OnInit, OnChanges {
  @Input() tableOverViewModel: TableOverViewModel;
  @Output() pageChange = new EventEmitter<PagedRequestDto>();
  @Output() selectionIdsChange = new EventEmitter<string[]>();

  allChecked: boolean = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableOverViewModel'] && !changes['tableOverViewModel'].firstChange) {
      this.mapStatusToRealName();
    }
  }

  ngOnInit(): void {
    this.mapStatusToRealName();

    this.pageSize = this.tableOverViewModel.pageSize;
    this.showPaging(this.tableOverViewModel.totalCount);
  }

  list(request: PagedRequestDto, pageNumber: number): void {
    this.pageChange.emit(request);
    this.pageNumber = pageNumber;
  }

  updateAllChecked() {
    this.allChecked = this.tableOverViewModel.data != null && this.tableOverViewModel.data.every((t) => t._checked);
    this.selectionIdsChange.emit(_.map(_.filter(this.tableOverViewModel.data, ['_checked', true]), 'id'));
  }

  someChecked(): boolean {
    if (this.tableOverViewModel.data == null) {
      return false;
    }
    return this.tableOverViewModel.data.filter((t) => t._checked).length > 0 && !this.allChecked;
  }

  checkedAll(checked: boolean) {
    this.allChecked = checked;
    if (this.tableOverViewModel.data == null) {
      return;
    }
    this.tableOverViewModel.data.forEach((t) => (t._checked = checked));
    this.selectionIdsChange.emit(_.map(_.filter(this.tableOverViewModel.data, ['_checked', true]), 'id'));
  }

  callbackFunction(row, rowItem, index) {
    rowItem.callbackFunction(row, rowItem, index);
  }

  private mapStatusToRealName() {
    if (_.find(this.tableOverViewModel.header, ({ row }) => !!_.find(row?.items, ['key', 'status']))) {
      _.forEach(this.tableOverViewModel.data, (row) => {
        row.status = getRealStatus(row.status);
      });
    }
  }
}
