import {Component, EventEmitter} from 'angular2/core';
import {TaskComponent} from './task.component';
import {Task} from './task.model';
import {EditTaskDetailsComponent} from './edit-task-details.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe],
  directives: [TaskComponent, EditTaskDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone">Show Not Done</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone" 
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
  public filterDone: string;
  constructor(){
    this.onTaskSelect = new EventEmitter();;
  }
  taskClicked(task: Task): void {
    this.selectedTask = task;
    this.onTaskSelect.emit(task);
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}