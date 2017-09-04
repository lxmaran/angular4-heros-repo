import { Component, OnInit } from '@angular/core'
import Hero from "../domain/hero";
import HeroService from "../services/hero.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.components.css']
})

export default class DashboardComponent implements OnInit {
    heroes:Hero[];
    constructor(private heroService: HeroService){ 
    }

    ngOnInit(): void{
        this.getTopFourHeroes();
    }

    getTopFourHeroes(): void{
        this.heroService.getHeroes().then(data=>this.heroes = data.slice(0,4));
    }
}