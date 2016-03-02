import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ hero.name }} details!</h2>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name"></div>
    </div>
  `
})
// one way data binding = display data in {{}}
// 2 way data binding means we setup an input and an output at the same time using ngModel.
export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Batman'
  };
}

//we'll start with a hero interface for our model. we don't need the hero to have any logic or actions, so an interface for an object is fine.
interface Hero {
  id: number;
  name: string;
}
