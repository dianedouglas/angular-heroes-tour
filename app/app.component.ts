import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public title: string = "To-Do List";
  public allTasks: Task[] = TASKS;
  toggleDone(clickedTask: Task): void {
    clickedTask.done = !clickedTask.done;
  }
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