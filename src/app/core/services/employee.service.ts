import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployee } from '../models/hr.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployeesSrvc(): Observable<object> {
    return this.http.get('http://localhost:4000/api/v1/employees/')
  }

  getAllDepartments(): Observable<object> {
    return this.http.get(`http://localhost:4000/api/v1/departments/`)
  }

  // delete employee
  deleteEmployee(id:number): Observable<object> {
    return this.http.delete(`http://localhost:4000/api/v1/employees/${id}`)
  }

}
