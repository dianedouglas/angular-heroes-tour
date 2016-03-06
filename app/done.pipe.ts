import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "done"
})
export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "done") {
      return input.filter((task) => task.done);
    } else if (desiredDoneState === "notDone") {
      return input.filter((task) => !task.done);
    } else {
      return input;
    }
  }
}