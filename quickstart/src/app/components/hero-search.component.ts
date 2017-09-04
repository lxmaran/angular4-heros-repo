import { Component, OnInit } from "@angular/core";
import HeroSearchService from "../services/hero-search.service";
import { Router } from "@angular/router";
import Hero from "../domain/hero";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
 

@Component({
    selector: 'hero-search',
    templateUrl: './hero-serach.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})
export default class HeroSearchComponent implements OnInit{

    heroes: Observable<Hero[]>
    private serchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService, private router:Router) {
    }

    search(term: string): void{
        this.serchTerms.next(term);
    }

    goToDetails(hero: Hero): void{
        this.router.navigate(['/detail',hero.id]);
    }

    ngOnInit(): void {
        this.heroes = this.serchTerms
                                .debounceTime(100)
                                .distinctUntilChanged()
                                .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
                                .catch(this.errorHandler);
    }

    errorHandler(err: any): any{
        console.log('Err: ',err);
        return Observable.of<Hero[]>([]);
    }

}