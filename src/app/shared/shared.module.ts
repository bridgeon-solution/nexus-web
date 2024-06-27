import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../feature/feature-auth/login/login.component';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { PaymentComponent } from './payment/payment.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SendLeaveComponent } from './send-leave/send-leave.component';
import { TopProfileComponent } from './top-profile/top-profile.component';
import { FounderDashboardComponent } from './founder-dashboard/founder-dashboard.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentCardsComponent,
    SideNavComponent,
    EmployeeDetailsComponent,
    DashboardComponent,
    ProfileComponent,
    AnnouncementsComponent,
    AddEmployeeComponent,
    SendLeaveComponent,
    TopProfileComponent,
    FounderDashboardComponent,
    LeaveHistoryComponent,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    RouterModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule
  ],
  exports: [
    PaymentCardsComponent,
    SideNavComponent,
    EmployeeDetailsComponent,
    ProfileComponent,
    TopProfileComponent,
    SendLeaveComponent,
    FounderDashboardComponent,
    LeaveHistoryComponent,
    SkeletonComponent
  ]
})
export class SharedModule { }
