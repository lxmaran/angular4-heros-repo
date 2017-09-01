"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./components/app.component");
const hero_detail_component_1 = require("./components/hero-detail.component");
const heroes_component_1 = require("./components/heroes.component");
const hero_service_1 = require("./services/hero.service");
const Router_1 = require("./Router");
const dashboard_component_1 = require("./components/dashboard.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, Router_1.Router],
        declarations: [hero_detail_component_1.default, app_component_1.AppComponent, heroes_component_1.default, dashboard_component_1.default],
        bootstrap: [app_component_1.AppComponent],
        providers: [hero_service_1.default],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map