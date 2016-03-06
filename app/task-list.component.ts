import {Component, EventEmitter} from 'angular2/core';
import {TaskComponent} from './task.component';
import {Task} from './task.model';

@Component({
    selector: 'task-list',
    inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList" 
      [task]="currentTask"
      (click)="taskClicked(currentTask)"
      [class.selected]="currentTask === selectedTask">
  </task-display>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  public selectedTask: Task;
  public onTaskSelect: EventEmitter<Task>;
  constructor(){
    this.onTaskSelect = new EventEmitter();;
  }
  taskClicked(task: Task): void {
    this.selectedTask = task;
    this.onTaskSelect.emit(task);
  }
}