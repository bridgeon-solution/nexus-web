import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployee } from '../models/hr.model';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http: HttpClient) { }

  addEmployee(values: AddEmployee, file: File): Observable<object> {
    let employeeValues: FormData = new FormData();
    employeeValues.append('fullname', values.fullname);
    employeeValues.append('image', file);
    employeeValues.append('email', values.email);
    employeeValues.append('phone', values.phone);
    employeeValues.append('salary', values.salary);
    employeeValues.append('gender', values.gender);
    employeeValues.append('password', values.password);
    employeeValues.append('birthdate', values.birthdate);
    employeeValues.append('role', values.role);
    employeeValues.append('designation', values.designation);
    employeeValues.append('departmentId', values.departmentId);
    return this.http.post(`http://localhost:4000/api/v1/employees/create`, employeeValues)
  }

  getAllDepartments(): Observable<object> {
    return this.http.get(`http://localhost:4000/api/v1/departments/`)
  }

}
