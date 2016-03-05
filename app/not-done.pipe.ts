import {Pipe} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
    name: "notDone"
})
export class NotDonePipe {
  transform(input: Task[]) {
    return input.filter( (task)=> !task.done);
  }
}