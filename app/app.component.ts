import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{ title }}</h1>
  <h3>Sample Task</h3>
  <p>{{ testTask.description }}</p>
  `
})
export class AppComponent {
  public title: string = "To-Do List";
  public testTask: Task = {
    description: "Write to-do list.",
    done: false
  };
}

interface Task {
  description: string;
  done: boolean;
}
