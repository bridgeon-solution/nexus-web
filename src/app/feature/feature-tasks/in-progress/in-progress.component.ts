import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksData } from 'src/app/core/models/tasks.interface';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent {
  @Input() inProgress: TasksData[];
  @Output() taskDropped: EventEmitter<CdkDragDrop<TasksData[]>> = new EventEmitter()

  drop(event: CdkDragDrop<TasksData[]>) {
    this.taskDropped.emit(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
