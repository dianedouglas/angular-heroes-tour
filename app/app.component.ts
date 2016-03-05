import {Component} from 'angular2/core';
import {Task} from './task.model';
import {TaskEditComponent} from './task-edit.component';
import {TaskListComponent} from './task-list.component';
import {DonePipe} from './done.pipe';
import {NotDonePipe} from './not-done.pipe';

@Component({
  selector: 'my-app',
  directives: [TaskEditComponent, TaskListComponent],
  pipes: [DonePipe, NotDonePipe],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public title: string = "To-Do List";
  public allTasks: Task[] = TASKS;
  public selectedTask: Task;
  toggleDone(checkedTask: Task): void {
    checkedTask.done = !checkedTask.done;
  }
  selectTask(clickedTask: Task): void {
    this.selectedTask = clickedTask;
  }

  addTask(newDescription: HTMLInputElement): void {
    this.allTasks.push({
      "description": newDescription.value,
      "done": false
    });
    newDescription.value = "";
  }
}

var TASKS: Task[] = [
  { "description": "Write to-do list.", "done": false },
  { "description": "Learn the guitar solo from Fire by Jimi Hendrix.", "done": false },
  { "description": "Clean the kitchen.", "done": false },
  { "description": "Take a nap.", "done": true },
  { "description": "Learn Kung Fu.", "done": false },
  { "description": "Watch all three Lord of the Rings movies in a row", "done": true },
]

