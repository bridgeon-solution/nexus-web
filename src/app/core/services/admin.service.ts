import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  fetchFounders():Observable<object> {
    return this.http.get('http://localhost:4000/api/v1/founders/founders')
  }
  deleteFounder(id:number):Observable<Object> {
    return this.http.delete(`http://localhost:4000/api/v1/founders/founders/${id}`)
  }
}
