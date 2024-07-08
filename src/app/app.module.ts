import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeatureAuthModule } from './feature/feature-auth/feature-auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/services/interceptor.service';
import { FeaturePermissionModule } from './feature/feature-permission/feature-permission.module';
import { FeatureProjectModule } from './feature/feature-project/feature-project.module';
import { FeatureTasksModule } from './feature/feature-tasks/feature-tasks.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FeatureAuthModule,
    FeatureProjectModule,
    FeaturePermissionModule,
    BrowserAnimationsModule,
    FeatureTasksModule,
    MatSnackBarModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
