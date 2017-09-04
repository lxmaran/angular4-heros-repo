import {
  RouterModule, Routes
} from '@angular/router';

import HeroesComponent from "./components/heroes.component";
import DashboardComponent from "./components/dashboard.component";
import HeroDetailComponent from "./components/hero-detail.component"
import { NgModule } from "@angular/core";
export const routes: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export default class AppRoutingModule {}
