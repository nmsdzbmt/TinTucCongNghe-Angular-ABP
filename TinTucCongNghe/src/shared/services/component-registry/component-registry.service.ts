import { Injectable } from '@angular/core';
import { AddPostComponent } from '@app/managements/add-post/add-post.component';
import { AddCategoryComponent } from '@app/managements/add-category/add-category.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentRegistryService {
  public getComponentByName(name: string) {
    return name === 'AddCategoryComponent'
      ? AddCategoryComponent   
      :name === 'AddPostComponent'
      ? AddPostComponent   
      : null;
  }
}
