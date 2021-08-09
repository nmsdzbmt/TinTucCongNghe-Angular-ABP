import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuConfigService } from './services/menu-config.service';
import { UtilsService } from './services/utils.service';
import { LogsService } from './services/logs.service';
import { TranslationService } from './services/translation.service';


@NgModule({
	imports: [CommonModule],
	declarations: [

	],
	exports: [

	],
	providers: []
})
export class CoreModule {
	static forRoot(): ModuleWithProviders {
		return { 
			ngModule: CoreModule, 
			providers: [
			// template services
			MenuConfigService,
			UtilsService,
			LogsService,
			TranslationService,
		]};
	}
}
