import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminNavbarComponent } from './feature/feature-admin/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './feature/feature-admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './feature/feature-admin/admin-users/admin-users.component';
import { FeatureAuthModule } from './feature/feature-auth/feature-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FeatureAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
