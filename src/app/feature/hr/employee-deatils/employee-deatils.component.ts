import { Component, OnInit } from '@angular/core';
import { Department, Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/shared/add-employee/add-employee.component';


@Component({
  selector: 'app-employee-deatils',
  templateUrl: './employee-deatils.component.html',
  styleUrls: ['./employee-deatils.component.css']
})
export class EmployeeDeatilsComponent implements OnInit {
  isDropdownOpen: boolean = false;
  employeeDetailsOption: boolean = true;
  allEmployees: Employee[] = [];
  allDepartments: Department[] = [];

  constructor(private employeeSrvc: EmployeeService, private matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.fetchEmployess()
    // this.fetchDepartments()
  }

  fetchEmployess() {
    this.employeeSrvc.getAllEmployeesSrvc().subscribe((res:{status:string,data:[Employee]}) => {
      this.allEmployees = res.data;
    })
  }

  selectEmpOptions() {
    this.employeeDetailsOption = !this.employeeDetailsOption;
  }

  addEmployees() {
    this.matDialog.open(AddEmployeeComponent)
  }
}
