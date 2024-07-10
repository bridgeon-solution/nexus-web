import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ToDoComponent } from './to-do/to-do.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { DoneComponent } from './done/done.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class FeatureTasksModule { }
