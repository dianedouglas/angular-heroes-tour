import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{ title }}</h1>
  <div *ngFor="#currentTask of allTasks; #i = index">
    <h3>Task #{{ i + 1 }}:</h3>
    <p>{{ currentTask.description }}</p>
  </div>
  `
})
export class AppComponent {
  public title: string = "To-Do List";
  public allTasks: Task[] = TASKS;
}

interface Task {
  description: string;
  done: boolean;
}

var TASKS: Task[] = [
  { "description": "Write to-do list.", "done": false },
  { "description": "Learn the guitar solo from Fire by Jimi Hendrix.", "done": false },
  { "description": "Clean the kitchen.", "done": false },
  { "description": "Take a nap.", "done": true },
  { "description": "Learn Kung Fu.", "done": false },
  { "description": "Watch all three Lord of the Rings movies in a row", "done": true },
]