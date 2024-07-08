import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ToDoComponent } from './to-do/to-do.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { DoneComponent } from './done/done.component';
import { AddTaskComponent } from './add-task/add-task.component';



@NgModule({
  declarations: [
    ViewTasksComponent,
    ToDoComponent,
    InProgressComponent,
    OnHoldComponent,
    DoneComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureTasksModule { }
