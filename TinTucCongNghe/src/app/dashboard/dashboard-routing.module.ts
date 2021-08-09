import { IntroductionComponent } from './../introduction/introduction.component';
import { HomepageComponent } from './../Homepage/Homepage.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "Homepage", component:  DashboardComponent },
  { path: "introduction", component: IntroductionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
