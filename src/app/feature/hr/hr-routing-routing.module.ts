import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDeatilsComponent } from './employee-deatils/employee-deatils.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { DashboardComponent } from 'src/app/shared/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/shared/profile/profile.component';
import { AnnouncementsComponent } from 'src/app/shared/announcements/announcements.component';
import { GeneratePaySlipComponent } from '../feature-pay-roll/generate-pay-slip/generate-pay-slip.component';
import { PaySlipComponent } from '../feature-pay-roll/pay-slip/pay-slip.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeeDeatilsComponent },
  { path: 'leaves', component: LeaveManagementComponent },
  { path: 'view-profile', component: ProfileComponent },
  { path: 'pay-roll', component: PaySlipComponent },
  { path: 'announcements', component: AnnouncementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingRoutingModule { }
