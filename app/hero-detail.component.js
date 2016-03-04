System.register(['angular2/core', 'angular2/router', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // when this component is created by going to the route we want to get the id parameter from the url
                    // we do that using the routeparams service, and then
                    // then we feed it into the _heroService to get the hero with the matching id and put it into the hero property to be displayed.
                    // nothing changes in the template, we want to display the hero the same way, we're just getting it using a param from the url rather than a function call on click from heroes list.
                    var id = parseInt(this._routeParams.get('id'));
                    this._heroService.getHero(id).then(function (returnedHero) { return _this.hero = returnedHero; });
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        inputs: ['hero: detailsHero'],
                        template: "\n  <div *ngIf=\"hero\">\n    <h2>{{ hero.name }} details!</h2>\n    <div>\n      <label>name: </label>\n      <div><input [(ngModel)]=\"hero.name\"></div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//All of our component names end in "Component".
//All of our component file names end in ".component".
//# sourceMappingURL=hero-detail.component.js.map