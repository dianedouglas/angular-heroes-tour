import { Component } from 'angular2/core';
import { HeroesListComponent } from './heroes-list.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
//import all router services, directives, and the configuration decorator (similar to component decorator)
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// use the RouteConfig decorator to assign a router to this component and configure it.
// takes an array of route definitions. This object below is one route definition.
// 3 parts: path, name, component.
// name must begin with a capital letter to avoid confusion with the path, which is what would be the URL for this route.
// component is the component the router should create when navigating to this route.
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesListComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])
// router component template stuff to add:
// add router-outlet to component template. this is one of the ROUTER_DIRECTIVES.
// displays each component immediately below the router-outlet tag as we navigate.

// include links with the [routerLink] binding set to be the name of the route to go to.
// this is the routing instruction and we set it equal to a 'link parameters array.'
@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService], //promote service from the HeroesListComponent to the AppComponent. one instance at top.
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['Heroes']">Heroes List</a>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <router-outlet></router-outlet>
  `
})
// This is now a special type of component called a Router Component
// The router displays each component immediately below the <router-outlet> as we navigate through the application.
export class AppComponent {
  public title: string = 'Hero Tracker';
}
