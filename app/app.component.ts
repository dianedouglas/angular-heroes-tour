import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

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
export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: Hero[];
  constructor(private _heroService: HeroService) {
    // the parameter defines a private property of type HeroService called _heroService.
  }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    //this.heroes = this._heroService.getHeroes(); //now this returns a promise not assignable to type Hero[].
    // a promise means that the service will tell us when it's done by calling a function that we define - a callback function.
    // by calling this._heroService.getHeroes() method, it returns an object called a promise, which has a 'then' method.
    // we want to call this method to tell it what to do next when the service's getHeroes function finishes.
    this._heroService.getHeroes().then(returnedHeroes => this.heroes = returnedHeroes);
    // basically what we are doing is saying create a function with no name that takes a parameter called returnedHeroes, which is the array of heroes defined to be returned from the service.
    // the parameter returnedHeroes is assigned to the AppComponent's heroes property. 
  }
  select(currentHero: Hero): void {
    this.selectedHero = currentHero;
  }
}
/*
Angular has some built in interfaces called **Lifecycle Hooks**. Each interface defines one method.
If you implement one of the interfaces and declare its method in your component using the correct name then Angular will call it automatically at the correct time.
For example ngOnInit is called when your app is launched.
*/
