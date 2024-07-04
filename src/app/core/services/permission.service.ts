import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllPermission } from '../models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }

  getPermissionByEmpId(employeeId: string): Observable<Object> {
    return this.http.get(`http://localhost:4000/api/v1/permission/${employeeId}`)
  }

  givePermission(employeeId: string, permissionId: number, enabled: boolean): Observable<Object> {
    return this.http.put(`http://localhost:4000/api/v1/permission/${employeeId}/${permissionId}`, { enabled })
  }

  getAllPermissions(): Observable<AllPermission> {
    return this.http.get<AllPermission>(`http://localhost:4000/api/v1/permission/`)
  }
}
