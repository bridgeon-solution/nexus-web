import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDeatilsComponent } from './employee-deatils/employee-deatils.component';
import { HrRoutingRoutingModule } from './hr-routing-routing.module';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    EmployeeDeatilsComponent,
    LeaveManagementComponent,
    PayRollComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatDialogModule,
    HrRoutingRoutingModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [EmployeeDeatilsComponent]
})
export class HRModule { }
