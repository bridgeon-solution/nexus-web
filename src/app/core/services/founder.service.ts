import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FounderService {

  constructor(private http: HttpClient) { }

  fetchFounder(id: string): Observable<object> {
    return this.http.get(`http://localhost:4000/api/v1/founders/${id}`)
  }

  deleteFounder(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:4000/api/v1/founders/founders/${id}`)
  }

}
