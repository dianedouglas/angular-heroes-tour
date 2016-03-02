import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h1>{{ hero.name }}</h1>
  `
})

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
