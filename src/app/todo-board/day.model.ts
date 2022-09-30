import { Task } from './task.model';

export class Day {
  name: string;
  tasks: Task[];
  constructor(name: string, tasks: Task[] = []) {
    this.name = name;
    this.tasks = tasks;
  }
  addTask() {
    this.tasks.push(new Task());
    console.log(this.tasks);
  }
}
