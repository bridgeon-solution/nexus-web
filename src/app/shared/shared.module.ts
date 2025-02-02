import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { TeamDetailedViewComponent } from './team-detailed-view/team-detailed-view.component';

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
    ConfirmationModalComponent,
    ViewTeamsComponent,
    TeamDetailedViewComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    RouterModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule

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
    SkeletonComponent,
    ViewTeamsComponent
  ],
  providers:[
    // provideNativeDateAdapter
  ]
})
export class SharedModule { }
