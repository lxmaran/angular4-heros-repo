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
const hero_service_1 = require("../services/hero.service");
let Heroes = class Heroes {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes().then(data => this.heroes = data);
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
    goToDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(name) {
        name = name.trim();
        if (!name)
            return;
        this.heroService
            .addHero(name)
            .then(hero => this.heroes.push(hero));
    }
    delete(hero) {
        this.heroService
            .delete(hero.id)
            .then(() => {
            if (this.selectedHero && this.selectedHero == hero)
                this.selectedHero = null;
            this.heroes = this.heroes.filter(x => x != hero);
        });
    }
};
Heroes = __decorate([
    core_1.Component({
        selector: 'heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.default, router_1.Router])
], Heroes);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Heroes;
//# sourceMappingURL=heroes.component.js.map