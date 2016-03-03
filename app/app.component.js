System.register(['angular2/core', './heroes-list.component', './dashboard.component', './hero.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heroes_list_component_1, dashboard_component_1, hero_service_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_list_component_1_1) {
                heroes_list_component_1 = heroes_list_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // use the RouteConfig decorator to assign a router to this component and configure it.
            // takes an array of route definitions. This object below is one route definition.
            // 3 parts: path, name, component.
            // name must begin with a capital letter to avoid confusion with the path, which is what would be the URL for this route.
            // component is the component the router should create when navigating to this route.
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Hero Tracker';
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_list_component_1.HeroesListComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, hero_service_1.HeroService],
                        template: "\n    <h1>{{ title }}</h1>\n    <a [routerLink]=\"['Heroes']\">Heroes List</a>\n    <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n    <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map