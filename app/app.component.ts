import {Component, EventEmitter} from 'angular2/core';
import {TaskListComponent} from './task-list.component';
import {Task} from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <h1>To-Do List TESTING</h1>
  <task-list
    [taskList]="tasks"
    (onTaskSelect)="taskWasSelected($event)">
  </task-list>
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
    console.log('app component received custom event: ', task);
  }
}