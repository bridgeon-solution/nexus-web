import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  addDepartment(value: string): Observable<object> {
    const name = { name: value }
    return this.http.post('http://localhost:4000/api/v1/departments/create', name)
  }
  getAllDepartments(): Observable<object> {
    return this.http.get(`http://localhost:4000/api/v1/departments/`)
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:4000/api/v1/departments/${id}`)
  }
}
