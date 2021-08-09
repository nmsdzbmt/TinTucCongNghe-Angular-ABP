import { Injectable } from '@angular/core';
import { ConfigData } from '../interfaces/config-data';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter} from 'rxjs/operators';
import * as objectPath from 'object-path';
import * as _ from 'lodash';

@Injectable()
export class MenuConfigService {

	$onShowMenuMobile = new Subject<boolean>();

	listMenu:any[] = [
		{
			name: 'Danh mục',
			icon: 'fa fa-list-ul',
			url: '/app/management/category',
		},
		{
			name: 'Bài viết',
			icon: 'fa fa-file-text-o',
			order: 1,
			url: '/app/management/post',
		},
	];
	listMenu2:any[] = [];

	constructor(
	) {
	}

	switchMenuMobile(){
		this.$onShowMenuMobile.next(false);
	}

	setupMenu(list1, list2){

		_.each(list1, menu => {

			var listSub = _.filter(list2, ['parentId', menu.id]);

			if(listSub.length > 0){
				menu.listSub = _.cloneDeep(listSub);
				this.setupMenu(menu.listSub, list2);
			}
		});
	}

	setActive(url){

		for(var i = 0; i < this.listMenu.length; i++){
			var parent = this.listMenu[i];
			parent.active = false;

			if(this.checkActive(parent.url, url)){
				parent.active = true;
			}
			else{
				if(parent.listSub && parent.listSub.length > 0){
					for(var j = 0; j < parent.listSub.length; j++){
						var sub1 =  parent.listSub[j];
						sub1.active = false;
						if(this.checkActive(sub1.url, url)){
							parent.active = true;
							sub1.active = true;
						}
						else{
							if(sub1.listSub && sub1.listSub.length > 0){
								for(var k = 0; k < sub1.listSub.length; k++){
									var sub2 =  sub1.listSub[k];
									sub2.active = false;
									if(this.checkActive(sub2.url, url)){
										parent.active = true;
										sub1.active = true;
										sub2.active = true;
									}
									else{
										if(sub2.listSub && sub2.listSub.length > 0){
											for(var l = 0; l < sub2.listSub.length; l++){
												var sub3 =  sub1.listSub[k];
												sub3.active = false;
												if(this.checkActive(sub3.url, url)){
													parent.active = true;
													sub1.active = true;
													sub2.active = true;
													sub3.active = true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}

		}
	}

	checkActive(urlMenu, urlPage){
		return  urlMenu == urlPage;
	}
}
