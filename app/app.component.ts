import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#person of heroes"
        (click)="select(person)"
        [class.selected]="person === selectedHero">
        <span>{{person.id}} </span>{{person.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{ selectedHero.name }} details!</h2>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="selectedHero.name"></div>
      </div>
    </div>
  `
})
// one way data binding = display data in {{}}
// 2 way data binding means we setup an input and an output at the same time using ngModel.
export class AppComponent {
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: Hero[] = HEROES;
  select(currentHero: Hero): void {
    this.selectedHero = currentHero;
  }
}

//we'll start with a hero interface for our model. we don't need the hero to have any logic or actions, so an interface for an object is fine.
interface Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
