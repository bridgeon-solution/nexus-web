import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveData } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  id: number = Number(localStorage.getItem('id'))

  leaveSubmit(leaveData: LeaveData): Observable<object> {
    return this.http.post(`http://localhost:4001/api/v1/leaves/create/${this.id}`, leaveData)
  }
}
