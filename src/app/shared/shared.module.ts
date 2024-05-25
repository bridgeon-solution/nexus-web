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
import { MatButtonModule  } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BodyComponent } from './body/body.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentCardsComponent,
    SideNavComponent,
    BodyComponent,
    EmployeeDetailsComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
  ],
  exports: [
    PaymentCardsComponent,
    SideNavComponent,
    BodyComponent,
    EmployeeDetailsComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
