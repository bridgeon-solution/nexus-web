import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllPermission, AllPermissionEmp, Permission, PermissionEmp } from 'src/app/core/models/permission.model';
import { PermissionService } from 'src/app/core/services/permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
})
export class PermissionComponent implements OnInit {
  employeeId: string;
  isChecked = false;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  allPermissions: Permission[]

  constructor(private _formBuilder: FormBuilder, private permissionService: PermissionService, private actvatedRoute: ActivatedRoute) {
    this.employeeId = (this.actvatedRoute.snapshot.params['employeeId'])
  }

  ngOnInit(): void {
    this.fetchAllPermission()
  }

  fetchAllPermission() {
    this.permissionService.getAllPermissions().subscribe((res: AllPermission) => {
      this.allPermissions = res.data

      this.permissionService.getPermissionByEmpId(this.employeeId).subscribe((res: AllPermissionEmp) => {
        const employeePermissions: PermissionEmp[] = res.data;
        this.allPermissions.forEach(permission => {
          permission['enabled'] = this.isPermissionEnabled(permission.id, employeePermissions)
        });
      });
    })
  }

  isPermissionEnabled(permissionId: number, employeePermissions: PermissionEmp[]): boolean {
    const foundPermission = employeePermissions.find(ep => ep.permissionsId === permissionId);
    return foundPermission ? foundPermission.enabled : false;
  }



  togglePermission(permissionId: number, enabled: boolean): void {
    this.permissionService.givePermission(this.employeeId, permissionId, enabled).subscribe(() => {
      this.fetchAllPermission()
    })
  }

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
