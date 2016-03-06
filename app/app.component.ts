import {Component, EventEmitter} from 'angular2/core';
import {TaskListComponent} from './task-list.component';
import {Task} from './task.model';
import {NewTaskComponent} from './new-task.component';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent, NewTaskComponent],
  template: `
  <div class="container">
    <h1>To-Do List</h1>
    <task-list
      [taskList]="tasks"
      (onTaskSelect)="taskWasSelected($event)">
    </task-list>
    <new-task (onSubmitNewTask)="createTask($event)">
    </new-task>
  </div>
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
    console.log(this.tasks);
  }
  createTask(newDescription: string): void {
    console.log(newDescription);
    this.tasks.push(
      new Task(newDescription, this.tasks.length)
    );
  }
}