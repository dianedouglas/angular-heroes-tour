import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'task-list',
  inputs: ['taskCollection'],
  outputs: ['onTaskSelected'],
  template: `
    <div *ngFor="#currentTask of taskCollection" class="task" (click)="selectTask(currentTask)" [class.selected]="currentTask === selectedTask">
      <input *ngIf="currentTask.done" type="checkbox" checked (click)="toggleDone(currentTask)"/>
      <input *ngIf="!currentTask.done" type="checkbox" (click)="toggleDone(currentTask)"/>
      <label>{{ currentTask.description }}</label>
    </div>
  `
})
export class TaskListComponent {
  public taskCollection: Task[];
  public onTaskSelected: EventEmitter<Task>;
  constructor() {
    this.onTaskSelected = new EventEmitter();
  }
  selectTask(task){
    this.onTaskSelected.emit(task);
  }
  toggleDone(){

  }
}
