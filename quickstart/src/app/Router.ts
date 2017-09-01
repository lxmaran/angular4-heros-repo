import {
  RouterModule
} from '@angular/router';

import HeroesComponent from "./components/heroes.component";
import DashboardComponent from "./components/dashboard.component";
import HeroDetailComponent from "./components/hero-detail.component"
export let Router = RouterModule.forRoot([{
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
])
