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
    this.heroes = this._heroService.getHeroes();
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
