import { TaskTime } from './taskTime';

export class Task {
  time: TaskTime;
  task: string;
  color: string = '#202225';
  colors: string[] = ['#64e986', '#ff7f84', '#cfd331', '#202225'];
  currentColorIndex = 3;
  constructor(time: number[] = [0, 0], task: string = '') {
    this.time = new TaskTime(time[0], time[1]);
    this.task = task;
  }
  addTask(e: Event) {
    this.task = (<HTMLTextAreaElement>e.target).value;
    (<HTMLTextAreaElement>e.target).value = this.task;
    console.log('inside taks adding ' + this.task);
  }
  changeColor() {
    console.log(this.currentColorIndex);
    if (this.currentColorIndex == 3) {
      this.currentColorIndex = 0;
    } else {
      this.currentColorIndex += 1;
    }
    this.color = this.colors[this.currentColorIndex];
  }
}
