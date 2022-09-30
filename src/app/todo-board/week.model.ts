import { Day } from './day.model';

export class Week {
  title: string = 'week 1';
  public days: Day[] = [
    new Day('Monday'),
    new Day('Tuesday'),
    new Day('Wednesday'),
    new Day('Thursday'),
    new Day('Friday'),
    new Day('Saturday'),
    new Day('Sunday'),
  ];
}
