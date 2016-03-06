import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
  <div>
    <img [src]="imgUrl" class="img-thumbnail">
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>  
  </div>
  `
})
export class TaskComponent {
  public task: Task;
  public imgUrl: string = './../resources/images/star.png';
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}