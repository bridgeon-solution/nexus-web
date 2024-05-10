import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.css']
})
export class PaymentCardsComponent {


  payment(amount:number) {
    console.log(amount);
    
  }
}
