import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    LoginComponent,
    PaymentComponent,
    PaymentCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaymentCardsComponent,
    LoginComponent
  ]
})
export class SharedModule { }
