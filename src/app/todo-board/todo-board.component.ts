import { Component, OnInit } from '@angular/core';
import { Day } from './day.model';
import { Task } from './task.model';
import { Week } from './week.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.css'],
})
export class TodoBoardComponent implements OnInit {
  week = new Week();
  constructor() {}
  ngOnInit(): void {}
  log() {}
  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.isPointerOverContainer == false) {
      event.container.data.splice(event.previousIndex, 1);
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
