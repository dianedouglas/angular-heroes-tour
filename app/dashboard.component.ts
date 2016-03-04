import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  public topHeroes: Hero[] = [];
  constructor(
    private _heroService: HeroService,
    private _router: Router){
  }
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(){
    this._heroService.getHeroes().then(returnedHeroes => {
      this.heroes = returnedHeroes;
      this.topHeroes = returnedHeroes.slice(1,5);
    });
  }
  goToDetail(hero: Hero){
    let link = ['HeroDetail', { id: hero.id }]; //route link parameters array.
    // this is actually the same kind of link parameters array as we have used before:
    // <a [routerLink]="['Dashboard']">Dashboard</a> - here the routerLink property is holding an array with just one argument
    // since dashboard doesn't have any url parameters. Above we have to pass in the id of the hero.
    // key of the object for each parameter matches the name of the one defined in the router.
    this._router.navigate(link); // pass it to the router's navigate method.
  }
}
