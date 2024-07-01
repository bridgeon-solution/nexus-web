import { Component, OnInit } from '@angular/core';
import { Department, Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { HrService } from 'src/app/core/services/hr.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { AddEmployeeComponent } from 'src/app/shared/add-modal/add-employee.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-employee-deatils',
  templateUrl: './employee-deatils.component.html',
  styleUrls: ['./employee-deatils.component.css'],
})
export class EmployeeDeatilsComponent implements OnInit {


  isDropdownOpen: boolean = false;
  employeeDetailsOption: boolean = true;
  allEmployees: Employee[] = [];
  allDepartments: Department[] = [];

  constructor(private employeeSrvc: EmployeeService, private hrSrvc: HrService, private matDialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  selectEmpOptions() {
    this.employeeDetailsOption = !this.employeeDetailsOption;
  }

  addEmployees() {
    const dialog = this.matDialog.open(AddEmployeeComponent, {
      data: { option: '' }
    });

    dialog.afterClosed().subscribe(result => {
      
      if (result) { // Check if a value was emitted
        console.log(result);
        
        // Use the received value in your parent component logic
      }
    });
  }


}
