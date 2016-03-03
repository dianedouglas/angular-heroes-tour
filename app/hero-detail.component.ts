import {Component} from 'angular2/core';
import {Hero} from './hero';

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
  `
})
export class HeroDetailComponent {
  hero: Hero;
}
//All of our component names end in "Component".
//All of our component file names end in ".component".
