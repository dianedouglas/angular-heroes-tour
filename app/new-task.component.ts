import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <h3>Create Task:</h3>
  <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
  <button (click)="addTask(newDescription)" class="btn-success btn-lg">Add</button>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<string>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(newDescription: HTMLInputElement){
    this.onSubmitNewTask.emit(newDescription.value);
  }
}