import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PayRoll } from '../models/payRoll.model';

@Injectable({
  providedIn: 'root'
})
export class PayRollService {

  constructor(private http: HttpClient) { }
  empId: string = localStorage.getItem('id');

  createPayRoll(id: number, payRollData: PayRoll): Observable<object> {
    return this.http.post(`http://localhost:4002/api/v1/payroll/create`, payRollData)
  }

  getPayRoll(): Observable<object> {
    return this.http.get(`http://localhost:4002/api/v1/payroll/`)
  }

  getPaySlipById(): Observable<object> {
    const id: number = Number(this.empId)
    return this.http.get(`http://localhost:4002/api/v1/payroll/${id}`)
  }

  getPayRollByDate(startDate: Date, endDate: Date): Observable<object> {
    if (startDate && endDate) {
      const params = new HttpParams()
        .set('startDate', startDate.toISOString())
        .set('endDate', endDate.toISOString());
      return this.http.get<PayRoll[]>('http://localhost:4002/api/v1/payroll/payslips', { params })
    } else {
      alert('Please select both start and end dates.');
      return this.http.get<PayRoll[]>('http://localhost:4002/api/v1/payroll/payslips')
    }
  }
}
