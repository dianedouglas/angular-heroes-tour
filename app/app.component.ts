import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: '<h1>To-Do List</h1>'
})
export class AppComponent { 
  public task: Task;
  constructor(){
    this.task = new Task("Create To-Do List app.", 0);
  }
}

class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){}
}