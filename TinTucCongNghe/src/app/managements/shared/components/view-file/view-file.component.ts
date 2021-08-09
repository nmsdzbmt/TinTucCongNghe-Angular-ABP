import { Component, OnInit, AfterViewInit, Injector, ElementRef, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { BaseModalComponent } from '@app/shared/_base/_modal.component';
declare var tui: any;

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent extends BaseModalComponent implements AfterViewInit  {

  file:any = null;
  imageEditor:any;
  @ViewChild('abc', {read: ViewContainerRef}) abc:ViewContainerRef;
  constructor(injector:Injector) {
    super(injector);
  }

	ngAfterViewInit(): void {
     setTimeout(() => {
       
      let path = null;
      let root = document.getElementById('tui-image-editor-1');
      if (this.file.data != null && this.file.data != undefined) {
        path = `data:${this.file.type};base64,${this.file.data}`;
      }
      if (this.file.fileUrl != null && this.file.fileUrl != undefined) {
        path = this.file.fileUrl;
      }
      this.imageEditor = new tui.ImageEditor('#tui-image-editor-1', {
        includeUI: {
          loadImage: {
            path: path,
            name: 'SampleImage'
          },
          menuBarPosition: 'bottom',
          menu: []
        },
        cssMaxWidth: 9999,
        cssMaxHeight: 9999,
        usageStatistics: false
      });
  
      let header = root.querySelector<HTMLInputElement>('.tui-image-editor-header');
  
      let logo = header.querySelector<HTMLInputElement>('.tui-image-editor-header-logo');
      let buttons = header.querySelector<HTMLInputElement>('.tui-image-editor-header-buttons');
      logo.style.display = "none";
      buttons.style.marginRight = '50px';
  
      this.imageEditor.ui.resizeEditor();

      $('.tui-image-editor-menu').append('<li title="Phóng to" class="zoom-in pointer tui-image-editor-item help"><i class="fa fa-search-plus font-size-29"></i></li>');
      $('.tui-image-editor-menu').append('<li title="Thu nhỏ" class="zoom-out pointer tui-image-editor-item help"> <i class="fa fa-search-minus font-size-29"></i></li>');

      $('.zoom-in').on('click', () => {
        this.zoom(100);
      })
      $('.zoom-out').on('click', () => {
        this.zoom(-100);
      })
  

     }, 100);
		
  }
  
  zoom(wDelta) {
		var imageOriginalSize = {
			width: this.imageEditor._graphics.canvasImage.width,
			height: this.imageEditor._graphics.canvasImage.height
		};
		var imageEditorWindow = document.querySelector<HTMLInputElement>('.tui-image-editor');
		var initWidth = imageEditorWindow.style.width;
		var initHeight = imageEditorWindow.style.height;
		var newWidth;
		var newHeight;
		// Zoom step 10%
		if (wDelta > 0) {
			newWidth = parseInt(initWidth, 10) * 1.1;
			newHeight = parseInt(initHeight, 10) * 1.1;
			// Limit maximum zoom by image resolution
			if (newWidth > imageOriginalSize.width || newHeight > imageOriginalSize.height) {
				newWidth = imageOriginalSize.width;
				newHeight = imageOriginalSize.height;
			}
		} else {
			newWidth = parseInt(initWidth, 10) * 0.9;
			newHeight = parseInt(initHeight, 10) * 0.9;
			// Limit minimum zoom by 0.5 of original container size
			if (parseInt(imageEditorWindow.dataset.minWidth, 10) * 0.5 > parseInt(newWidth, 10)) {
				newWidth = parseInt(imageEditorWindow.dataset.minWidth, 10) * 0.5;
				newHeight = parseInt(imageEditorWindow.dataset.minHeight, 10) * 0.5;
			}
		}
		imageEditorWindow.style.width = newWidth + 'px';
		imageEditorWindow.style.height = newHeight + 'px';
		$(imageEditorWindow).find('canvas, .tui-image-editor-canvas-container')
			.css('max-width', imageEditorWindow.style.width)
			.css('max-height', imageEditorWindow.style.height);

		// Save initial size of container
		if (imageEditorWindow.dataset.minHeight === undefined) {
			imageEditorWindow.dataset.minHeight = initHeight;
			imageEditorWindow.dataset.minWidth = initWidth;
		}
  }
  
  downloadFile(){
    window.open(this.file.fileUrl, "_blank");
  }
}
