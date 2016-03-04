import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'heroes-list',
  directives: [HeroDetailComponent],
  template: `
    <ul class="heroes">
      <li *ngFor="#person of heroes"
        (click)="select(person)"
        [class.selected]="person === selectedHero">
        <span>{{person.id}} </span>{{person.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>
        Check it out, you selected {{selectedHero.name | uppercase}}!
      </h2>
      <button (click)="goToDetail()">View Details</button>
    </div>
  `
})
// | uppercase is the uppercase pipe built into angular.  There's several of these that are useful for formatting data.
// one way data binding = display data in {{}}
// 2 way data binding means we setup an input and an output at the same time using ngModel.
export class HeroesListComponent implements OnInit {
  public selectedHero: Hero;
  public heroes: Hero[];
  constructor(
    private _heroService: HeroService,
    private _router: Router) {
    // the first parameter defines a private property of type HeroService called _heroService.
    // the second one defines a private _router property of type Router. 
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
    // we want to use promises in case we are pulling data from a server that is slow. This lets us wait until all the data is present before continuing to load without all our heroes.
    // the next line lets you see how it would look if the server took 2 seconds to resolve the promise.
    // this._heroService.getHeroesSlowly().then(returnedHeroes => this.heroes = returnedHeroes);
  }
  select(currentHero: Hero): void {
    this.selectedHero = currentHero;
  }
  goToDetail(){
    let link = ['HeroDetail', { id: this.selectedHero.id }];
    this._router.navigate(link);
  }
}
/*
Angular has some built in interfaces called **Lifecycle Hooks**. Each interface defines one method.
If you implement one of the interfaces and declare its method in your component using the correct name then Angular will call it automatically at the correct time.
For example ngOnInit is called when your app is launched.
*/
