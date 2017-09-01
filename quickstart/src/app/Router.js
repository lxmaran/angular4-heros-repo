"use strict";
const router_1 = require("@angular/router");
const heroes_component_1 = require("./components/heroes.component");
const dashboard_component_1 = require("./components/dashboard.component");
const hero_detail_component_1 = require("./components/hero-detail.component");
exports.Router = router_1.RouterModule.forRoot([{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.default
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.default
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.default
    }
]);
//# sourceMappingURL=Router.js.map