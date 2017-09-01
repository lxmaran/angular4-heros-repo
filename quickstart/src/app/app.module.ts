import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';

import {
  AppComponent
} from "./components/app.component";
import HeroDetailComponent from "./components/hero-detail.component";
import HeroesComponent from "./components/heroes.component";
import HeroService from "./services/hero.service";
import {
  Router
} from "./Router";
import DashboardComponent from "./components/dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, Router],
  declarations: [HeroDetailComponent, AppComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService],
})
export class AppModule {}
