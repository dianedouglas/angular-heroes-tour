import { Component } from 'angular2/core';
import { HeroesListComponent } from './heroes-list.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  directives: [HeroesListComponent],
  providers: [HeroService], //promote service from the HeroesListComponent to the AppComponent. one instance at top.
  template: `
    <h1>{{ title }}</h1>
    <heroes-list></heroes-list>
  `
})
export class AppComponent {
  public title: string = 'Hero Tracker';
}
