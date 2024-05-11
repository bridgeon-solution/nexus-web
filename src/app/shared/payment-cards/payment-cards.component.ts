import { Component } from '@angular/core';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.css']
})
export class PaymentCardsComponent {

  constructor(private paymentSrvc: PaymentService) { }

  payment(amount: string) {
    this.paymentSrvc.founderPayment(amount).subscribe((res: { message: string, data: string }) => {
      window.location.href = res.data;
    }, (err) => {
      console.log(err);
      alert('Payment failed')
    })
  }
}
