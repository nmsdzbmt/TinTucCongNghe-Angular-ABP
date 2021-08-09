
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



// @NgModule({
//     imports: [
//         RouterModule.forChild([
//             {
//                 path: '',
//                 component: AppComponent,
//                 // children: [
//                 //     { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
//                 //     { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
//                 //     { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
//                 //     { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
//                 //     { path: 'about', component: AboutComponent },
//                 //     { path: 'update-password', component: ChangePasswordComponent }
//                 // ]
//             }
//             //, { path: 'feature', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
//         ])
//     ],
//     exports: [RouterModule]
// })


// const routes: Routes = [{ path: '', component: AppComponent,
//         children: [
//           {
//             path: "management",
//             loadChildren:()=> import('app/managements/managements.module').then(m=>m.ManagementsModule), //Lazy load account module
//             data: { preload: true },
//             canActivate: [AppRouteGuard]
//           }
//         ] }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
        // children: [
        //   {
        //     path: 'management',
        //     loadChildren:()=> import('app/managements/managements.module').then(m=>m.ManagementsModule), //Lazy load account module
        //     data: { preload: true }
        //   },
        //   {
        //     path: 'Home',
        //     loadChildren:()=> import('app/dashboard/dashboard.module').then(m=>m.DashboardModule), //Lazy load account module
        //     data: { preload: true }
        //   }
        // ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
