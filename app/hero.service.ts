import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero'; //import the hero symbol so we can define the new slow promise.

@Injectable() // don't forget the parens here.
export class HeroService {
  getHeroes() {
    // start with a method stub = blank method place holder.
    // data could come from anywhere here, web service, local storage, etc.
    return Promise.resolve(HEROES);
    // ***the service is for accessing data and sharing it with multiple components.
  }
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
}
// naming convention: NameOfThingService = name-of-thing.service.ts
// lower dash case (kebab case) for file name with .service in it.
// inside of file, name the class same as the file name in upper camel case with 'Service' in it.
