import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { FounderRoutingModule } from './founder-routing.module';
import { FormsModule } from '@angular/forms';
import { ManageDepartmentComponent } from './manage-department/manage-department.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    ManageDepartmentComponent
  ],
  imports: [
    CommonModule,
    FounderRoutingModule,
    FormsModule
  ]
})
export class FounderModule { }
