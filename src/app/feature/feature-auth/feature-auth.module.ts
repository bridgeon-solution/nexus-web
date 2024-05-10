import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAuthRoutingModule } from './feature-auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FeatureAuthRoutingModule,
    FormsModule
  ]
})
export class FeatureAuthModule { }
