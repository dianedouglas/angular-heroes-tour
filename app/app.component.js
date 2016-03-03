System.register(['angular2/core', './hero-detail.component', './hero.service'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                    // the parameter defines a private property of type HeroService called _heroService.
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.getHeroes = function () {
                    this.heroes = this._heroService.getHeroes();
                };
                AppComponent.prototype.select = function (currentHero) {
                    this.selectedHero = currentHero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        providers: [hero_service_1.HeroService],
                        template: "\n    <h1>{{ title }}</h1>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#person of heroes\"\n        (click)=\"select(person)\"\n        [class.selected]=\"person === selectedHero\">\n        <span>{{person.id}} </span>{{person.name}}\n      </li>\n    </ul>\n    <my-hero-detail [detailsHero]=\"selectedHero\"></my-hero-detail>\n  "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
Angular has some built in interfaces called **Lifecycle Hooks**. Each interface defines one method.
If you implement one of the interfaces and declare its method in your component using the correct name then Angular will call it automatically at the correct time.
For example ngOnInit is called when your app is launched.
*/
//# sourceMappingURL=app.component.js.map