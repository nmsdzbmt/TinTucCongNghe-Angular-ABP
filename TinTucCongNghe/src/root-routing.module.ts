import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    // {
    //     path: 'account',
    //     loadChildren: () => import('account/account.module').then(m => m.AccountModule), // Lazy load account module
    //     data: { preload: true }
    // },
    {
        path: 'dashboard',
        loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { preload: true }
    },
    {
        path: 'Home',
        loadChildren: () => import('app/app.module').then(m => m.AppModule), // Lazy load account module
        data: { preload: true }
    },
    {
        path: "management",
        loadChildren:()=> import('app/managements/managements.module').then(m=>m.ManagementsModule), //Lazy load account module
        data: { preload: true }
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
