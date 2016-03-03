import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  directives: [HeroDetailComponent],
  providers: [HeroService],
  template: `
    <h1>{{ title }}</h1>
    <ul class="heroes">
      <li *ngFor="#person of heroes"
        (click)="select(person)"
        [class.selected]="person === selectedHero">
        <span>{{person.id}} </span>{{person.name}}
      </li>
    </ul>
    <my-hero-detail [detailsHero]="selectedHero"></my-hero-detail>
  `
})
// one way data binding = display data in {{}}
// 2 way data binding means we setup an input and an output at the same time using ngModel.
export class AppComponent {
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: Hero[];
  constructor(private _heroService: HeroService) {
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
  select(currentHero: Hero): void {
    this.selectedHero = currentHero;
  }
}
