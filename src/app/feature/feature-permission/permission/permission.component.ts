import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllPermissionEmp, PermissionEmp } from 'src/app/core/models/permission.model';
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

  allPermissions: PermissionEmp[]
  constructor(private _formBuilder: FormBuilder, private permissionService: PermissionService, private actvatedRoute: ActivatedRoute) {
    this.employeeId = (this.actvatedRoute.snapshot.params['employeeId'])
  }

  ngOnInit(): void {
    this.fetchAllPermission()
  }

  fetchAllPermission() {
    this.permissionService.getPermissionByEmpId(this.employeeId).subscribe((res: AllPermissionEmp) => {
      this.allPermissions = res.data;
    })
  }


  togglePermission(permissionId: number, enabled: boolean): void {
    this.permissionService.givePermission(this.employeeId, permissionId, enabled).subscribe(() => {
      this.fetchAllPermission()
    })
  }

}
