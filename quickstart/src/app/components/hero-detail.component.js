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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
const hero_service_1 = require("../services/hero.service");
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.paramMap
            .switchMap((params) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    goBack() {
        this.location.back();
    }
    updateHero() {
        this.heroService.updateHero(this.hero);
        this.goBack();
    }
};
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.default,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map