import {Pipe} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
    name: "done"
})
export class DonePipe {
  transform(input: Task[]) {
    return input.filter( (task)=> task.done);
  }
}