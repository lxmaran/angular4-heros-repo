import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './api/in-memory-data.service';

import { AppComponent } from "./components/app.component";
import HeroDetailComponent from "./components/hero-detail.component";
import HeroesComponent from "./components/heroes.component";
import HeroService from "./services/hero.service";
import AppRoutingModule from "./Router";
import DashboardComponent from "./components/dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService),],
  declarations: [HeroDetailComponent, AppComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService],
})
export class AppModule {}
