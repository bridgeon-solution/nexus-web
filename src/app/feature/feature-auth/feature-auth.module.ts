import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAuthRoutingModule } from './feature-auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HrRoutingRoutingModule } from '../hr/hr-routing-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FeatureAuthRoutingModule,
    HrRoutingRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    LoginComponent
  ]
})
export class FeatureAuthModule { }
