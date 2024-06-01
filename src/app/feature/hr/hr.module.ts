import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDeatilsComponent } from './employee-deatils/employee-deatils.component';
import { HrRoutingRoutingModule } from './hr-routing-routing.module';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    EmployeeDeatilsComponent,
    LeaveManagementComponent,
    PayRollComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    HrRoutingRoutingModule,
    SharedModule
  ],
  exports:[EmployeeDeatilsComponent]
})
export class HRModule { }
