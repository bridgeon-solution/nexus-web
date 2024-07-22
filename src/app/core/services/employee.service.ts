import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployee } from '../models/hr.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  id: string = localStorage.getItem('id')
  constructor(private http: HttpClient) { }

  createEmployee(values: AddEmployee, file: File): Observable<object> {
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

  getAllEmployees(page?: number, limit?: number): Observable<object> {
    if (!page || !limit) {
      return this.http.get(`http://localhost:4000/api/v1/employees/all`)
    }
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', limit.toString());

    return this.http.get(`http://localhost:4000/api/v1/employees?${params}`)
  }

  getEmployeeId(id: string): Observable<object> {
    return this.http.get(`http://localhost:4000/api/v1/employees/${id}`)
  }

  // delete employee
  deleteEmployee(id: number): Observable<object> {
    return this.http.delete(`http://localhost:4000/api/v1/employees/${id}`)
  }

  // Update employee
  updateEmployee(values: AddEmployee, file: File, empId: number): Observable<object> {
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
    return this.http.patch(`http://localhost:4000/api/v1/employees/${empId}`, employeeValues)
  }

  paySlip(id: number): Observable<object> {
    return this.http.get(`http://localhost:4000/api/v1/employees/generate-paySlip/${id}`)
  }



}
