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
                    // Also makes it an "injection site", which means Angular must supply an instance of the HeroService when a new AppComponent is created.
                    // Underscore is not special except it is a convention to preface private variables with it
                    // lets a developer can see at a glance that this variable is private = only accessible from within its object.
                    // gets the HeroService instance from the Angular Dependency Injector.
                    // It has a collection of all instances of services.
                    // When we tell the dependency injector to give us an instance of a service, it checks to see if one already exists.
                    // If it does, we get that one. If there aren't any yet it creates one.
                    // We need to tell the injector how to create one. otherwise we get 'no provider for HeroService' exception.
                    // We tell the injector how to make a HeroService by registering a HeroService provider.
                    // We do that in the providers property of the component decorator.
                    // That lets the component and its child components get access to the data in the service.
                    // for ex. HeroDetailComponent is a child of AppComponent because we make an instance of it in the template with the selector <my-hero-detail>
                    // to use the service from a parent in a child component we would add it to the constructor in the same way.
                    // don't repeat it in the child providers array. that would create another instance and we just want to share the existing one.
                }
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
//# sourceMappingURL=app.component.js.map