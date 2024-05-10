import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';



@NgModule({
  declarations: [
    //AdminNavbarComponent

    // AdminHomeComponent,
    // AdminUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //AdminNavbarComponent
  ]
})
export class FeatureAdminModule { }
