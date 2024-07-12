import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.css']
})
export class PaymentCardsComponent {

  constructor(private paymentSrvc: PaymentService, private snackBar: MatSnackBar) { }

  payment(amount: string) {
    this.paymentSrvc.founderPayment(amount).subscribe((res: { message: string, data: string }) => {
      window.location.href = res.data;
    }, (err) => {
      console.log(err);
      this.snackBar.open("Payment Failed", "Clos", { duration: 3000 })
    })
  }
}
