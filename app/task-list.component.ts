import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'task-list',
  inputs: ['taskCollection'],
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
  public selectedTask: Task;
  toggleDone(checkedTask: Task): void {
    checkedTask.done = !checkedTask.done;
  }
  selectTask(clickedTask: Task): void {
    this.selectedTask = clickedTask;
  }
}
