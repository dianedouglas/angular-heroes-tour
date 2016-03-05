import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'tasks-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  template: `
  <h3 *ngFor="#task of taskList" (click)="taskClicked(task)">
    {{ task.description }}
  </h3>
  `
})
export class TasksList {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public currentTask: Task;
  constructor(){
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(task: Task) {
    this.currentTask = task;
    this.onTaskSelect.emit(task);
  }
}

@Component({
  selector: 'my-app',
  directives: [TasksList],
  template: `
  <h1>To-Do List</h1>
  <tasks-list
    [taskList]="tasks"
    (onTaskSelect)="taskWasSelected($event, task)">
  </tasks-list>
  `
})
export class AppComponent { 
  public tasks: Task[];
  constructor() {
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(task: Task): void {
    console.log(task);
  }
}

class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){}
}