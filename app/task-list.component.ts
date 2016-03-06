import {Component, EventEmitter} from 'angular2/core';
import {TaskComponent} from './task.component';
import {Task} from './task.model';
import {EditTaskDetailsComponent} from './edit-task-details.component';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskDetailsComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList" 
      [task]="currentTask"
      (click)="taskClicked(currentTask)"
      [class.selected]="currentTask === selectedTask">
  </task-display>
  <edit-task-details [task]="selectedTask">
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