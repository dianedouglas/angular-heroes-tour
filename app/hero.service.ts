import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';

@Injectable() // don't forget the parens here.
export class HeroService {
  getHeroes() {
    // start with a method stub = blank method place holder.
    // data could come from anywhere here, web service, local storage, etc.
    return HEROES;
  }
}
// naming convention: NameOfThingService = name-of-thing.service.ts
// lower dash case (kebab case) for file name with .service in it.
// inside of file, name the class same as the file name in upper camel case with 'Service' in it.
