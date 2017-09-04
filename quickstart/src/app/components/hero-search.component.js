"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const hero_search_service_1 = require("../services/hero-search.service");
const router_1 = require("@angular/router");
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/observable/of");
let HeroSearchComponent = class HeroSearchComponent {
    constructor(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.serchTerms = new Subject_1.Subject();
    }
    search(term) {
        this.serchTerms.next(term);
    }
    goToDetails(hero) {
        this.router.navigate(['/detail', hero.id]);
    }
    ngOnInit() {
        this.heroes = this.serchTerms
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap(term => term ? this.heroSearchService.search(term) : Observable_1.Observable.of([]))
            .catch(this.errorHandler);
    }
    errorHandler(err) {
        console.log('Err: ', err);
        return Observable_1.Observable.of([]);
    }
};
HeroSearchComponent = __decorate([
    core_1.Component({
        selector: 'hero-search',
        templateUrl: './hero-serach.component.html',
        styleUrls: ['./hero-search.component.css'],
        providers: [hero_search_service_1.default]
    }),
    __metadata("design:paramtypes", [hero_search_service_1.default, router_1.Router])
], HeroSearchComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map