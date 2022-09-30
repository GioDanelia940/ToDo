export class TaskTime {
  hour: number;
  minute: number;
  constructor(hour: number, minute: number) {
    this.hour = hour % 24;
    this.minute = minute % 60;
  }
  displayTime(): string {
    let textHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
    let textMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
    return `${textHour}:${textMinute}`;
  }
  displayHour() {
    return this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
  }
  displayMinute() {
    return this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
  }
  changeHour(e: Event) {
    let num = parseInt((<HTMLTextAreaElement>e.target).value);
    if (!isNaN(num)) {
      this.hour = num % 24;
    } else {
      this.minute = 0;
    }
    (<HTMLTextAreaElement>e.target).value = this.displayHour();
  }
  changeMinute(e: Event) {
    let num = parseInt((<HTMLTextAreaElement>e.target).value);
    if (!isNaN(num)) {
      this.minute = num % 60;
    } else {
      this.minute = 0;
    }
    (<HTMLTextAreaElement>e.target).value = this.displayMinute();
  }
}
