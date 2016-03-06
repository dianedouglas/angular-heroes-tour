import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <div class="task-form" *ngIf="task">
    <h3>Edit Description:</h3>
    <input type="text" [(ngModel)]="task.description" class="col-sm-8 input-lg"/>
  </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}