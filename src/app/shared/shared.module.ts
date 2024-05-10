import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    SignUpComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SignUpComponent,
    PaymentComponent
  ]
})
export class SharedModule { }
