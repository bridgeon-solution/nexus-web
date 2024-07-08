import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllPermissionEmp, PermissionEmp } from '../models/permission.model';
@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  id:string = localStorage.getItem('id')
  private permissions: PermissionEmp[]
  constructor(private http: HttpClient) { }

  getPermissionByEmpId(employeeId: string): Observable<AllPermissionEmp> {
    return this.http.get<AllPermissionEmp>(`http://localhost:4000/api/v1/permission/${employeeId}`)
  }

  setPermission(permissions: PermissionEmp[]): void {
    this.permissions = permissions;
  }

  getPermissions(): PermissionEmp[] {
    return this.permissions
  }

  hasPermission(permissionName: string) {
    // console.log(this.permissions);
    if (!this.permissions) {
      
    }else {
      return this.permissions.some(permission => permission.permission.name === permissionName && permission.enabled)
    }
    return false;
  }

  givePermission(employeeId: string, permissionId: number, enabled: boolean): Observable<Object> {
    return this.http.put(`http://localhost:4000/api/v1/permission/${employeeId}/${permissionId}`, { enabled })
  }

}
