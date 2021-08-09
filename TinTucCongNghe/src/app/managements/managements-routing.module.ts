import { ProfileComponent } from './components/profile/profile.component';

import { HomemanagementComponent } from './components/homemanagement/homemanagement.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ManagementsComponent } from './managements.component';
import { CategoryComponent } from './components/category/category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementsComponent,
    children: [
      {
        path: 'dashboard',
        component: HomemanagementComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      } ,
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'update-category',
        component: UpdateCategoryComponent
      },
      {
        path: 'add-post',
        component: AddPostComponent
      }
    ]
  }
];

@NgModule({
    imports: [
     
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class ManagementsRoutingModule { }
