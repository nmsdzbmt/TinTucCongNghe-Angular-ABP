import { DropdownData } from '../dropdownlist/dropdownlist.component';

export interface TableOverViewModel {
  header: HeaderTemplate[];
  data: any;
  pageSize: number;
  totalCount: number;
}

export interface HeaderTemplate {
  key?: string;
  description?: string;
  width?: number;
  class?: string;
  headerActionsTemplate?: HeaderActionTemplate[];

  title?: string; //
  css?: CSSHeaderTemplate; //
  row?: RowHeaderTemplate; //
}

export interface RowHeaderTemplate {
  css?: CSSHeaderTemplate;
  items?: KeyHeaderTemplate[];
}

export interface CSSHeaderTemplate {
  class: string;
  icon?: string;
}

export interface KeyHeaderTemplate {
  key: string;
  type: string;
  value?: string;
  css?: CSSHeaderTemplate;
  component?: any;
  callbackFunction?(row, rowHeaderItem, index: number): void;
}

export interface HeaderActionTemplate {
  description: string;
  icon: string;
  background?: string;
  class?: string;
  hide?(): boolean;
  callbackFunction(row): void;
}

export class FilterOverviewModel {
  key: string;
  name: string;
  type: 'text' | 'dropdownlist';
  data?: TextType | DropdownFilter;
}

export class DropdownFilter {
  model: string;
  icon: string;
  showSearch?: boolean;
  showEmpty?: boolean;
  minWidth?: number;
  maxHeight?: number;
  dropdownData: DropdownData[];
}

export class TextType {
  tagKey?: string;
  icon: string;
  minWidth?: number;
  maxHeight?: number;
  hoverTitle?: string;
  click?(item): void;
}

export interface ActionButtonTemplate extends HeaderActionTemplate {
  description: string;
}

export function getRealStatus(statusCode: string): string {
  switch (statusCode) {
    case 'ACTIVE':
      return 'Hoạt động';

    default:
      return 'Mặc định';
  }
}

export enum ActionType {
  expand = 'expand',
  dialog = 'dialog'
}
