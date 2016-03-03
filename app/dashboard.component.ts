import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  public topHeroes: Hero[] = [];
  constructor(private _heroService: HeroService){}
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(){
    this._heroService.getHeroes().then(returnedHeroes => {
      this.heroes = returnedHeroes;
      this.topHeroes = returnedHeroes.slice(1,5);
    });
  }
  goToDetail(){

  }
}
