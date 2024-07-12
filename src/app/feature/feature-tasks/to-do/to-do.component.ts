import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksData } from 'src/app/core/models/tasks.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  @Input() todo: TasksData[];
  @Output() taskDropped: EventEmitter<CdkDragDrop<TasksData[]>> = new EventEmitter()

  drop(event: CdkDragDrop<TasksData[]>) {
    this.taskDropped.emit(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
