import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminNavbarComponent } from './feature/feature-admin/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './feature/feature-admin/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
