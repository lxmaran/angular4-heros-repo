import {
  Component,
  OnInit
} from '@angular/core';
import Hero from "../domain/hero";
import HeroService from "../services/hero.service";
import { Styles } from "../styles";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styles: [Styles.heroes],
})

export default class Heroes implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}