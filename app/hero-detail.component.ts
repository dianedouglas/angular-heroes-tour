import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero: detailsHero'],
  template: `
  <div *ngIf="hero">
    <h2>{{ hero.name }} details!</h2>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name"></div>
    </div>
  </div>
  <button (click)="goBack()">Back</button>
  `
})
export class HeroDetailComponent {
  hero: Hero;
  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams)
  {}
  ngOnInit() {
    // when this component is created by going to the route we want to get the id parameter from the url
    // we do that using the routeparams service, and then
    // then we feed it into the _heroService to get the hero with the matching id and put it into the hero property to be displayed.
    // nothing changes in the template, we want to display the hero the same way, we're just getting it using a param from the url rather than a function call on click from heroes list.
    let id = parseInt(this._routeParams.get('id'));
    this._heroService.getHero(id).then(returnedHero => this.hero = returnedHero);
  }
  goBack() {
    window.history.back();
  }
}
//All of our component names end in "Component".
//All of our component file names end in ".component".
