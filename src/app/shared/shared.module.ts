import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SignUpComponent,
    PaymentComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SignUpComponent,
    PaymentComponent,
    LoginComponent
  ]
})
export class SharedModule { }
