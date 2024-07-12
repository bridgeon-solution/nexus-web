import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  founderPayment(currentAmount: string): Observable<object> {
    const fEmail:string = localStorage.getItem('email');
    const amount = { amount: currentAmount }
    return this.http.post(`http://localhost:4000/api/v1/founders/payment-founders/${fEmail}`, amount)
  }

}
