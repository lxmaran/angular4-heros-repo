import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Hero from "../domain/hero";
import HeroService from "../services/hero.service";
import { Styles } from "../styles";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export default class Heroes implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name)
      return;
    this.heroService
      .addHero(name)
      .then(hero => this.heroes.push(hero))
  }

  delete(hero: Hero): void {
      this.heroService
        .delete(hero.id)
        .then(()=> {
          if(this.selectedHero && this.selectedHero == hero)
            this.selectedHero = null;
          this.heroes = this.heroes.filter(x=> x!=hero)
        })
  }
}