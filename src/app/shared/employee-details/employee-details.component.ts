import { Component, Input, OnInit } from '@angular/core';
import { Department, Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { HrService } from 'src/app/core/services/hr.service';
import { Toast, ToastrService } from "ngx-toastr";
import { animate, style, transition, trigger } from '@angular/animations';
import { DepartmentService } from 'src/app/core/services/department.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() allEmployees: Employee[];
  // @Input() allDepartments: Department[];


  searchedArr: Employee[] = [];
  departmentArr: Employee[] = [];
  allDepartments: Department[] = [];

  loading: boolean = true;
  str: string;
  isDropdownOpen = false;
  employeeDetailsOption: boolean = true;
  underline: boolean = false
  menuOpen: number = null;
  searchTable: boolean = false;
  departmentTable: boolean = false;
  selectedOption: string = 'Select an option';
  options: string[] = ['all', 'Frontend Development', 'Back-end', 'UI', 'Testing'];

  constructor(private employeeSrvc: EmployeeService, private departmentService: DepartmentService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchDepartment()
  }

  fetchDepartment() {
    this.departmentService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.allDepartments = res.data;
      this.allDepartments.push({ name: 'All', id: 20 })

    })
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    if (this.selectedOption.length > 0) {
      this.isDropdownOpen = false;
      this.departmentTable = true
    } else {
      this.departmentTable = false;
    }
    if (option === `All`) {
      this.employeeDetailsOption = true;
      this.departmentTable = false;
    }
    this.departmentArr = this.allEmployees.filter((x) => { return x.department.name.toLowerCase().includes(this.selectedOption.toLowerCase()) });
    if (this.departmentArr.length === 0) {
      this.loading = true;
    }
  }

  toggleMenu(i) {
    this.menuOpen = i;
  }

  selectEmpOptions() {
    this.employeeDetailsOption = !this.employeeDetailsOption;
    this.underline = !this.underline
  }

  // search
  textEntering() {
    if (this.str.length > 0) {
      this.searchTable = true;
    } else {
      this.searchTable = false;
    }
    this.searchedArr = this.allEmployees.filter((x) => { return x.fullname.toLowerCase().includes(this.str.toLowerCase()) || x.email.toLowerCase().includes(this.str.toLowerCase()) || x.role.toLowerCase().includes(this.str.toLowerCase()) })
    if (this.departmentArr.length > 0) {
      this.searchedArr = this.departmentArr.filter((x) => { return x.fullname.includes(this.str) || x.email.includes(this.str) || x.role.includes(this.str) })
    }
  }

  // deleting employee
  deleteEmployee(id: number) {
    console.log(id);
    this.employeeSrvc.deleteEmployee(id).subscribe((res: { status: string, data: [Employee] }) => {
      if (res.status === 'success') {
        // this.toastr.success('Deleted successfully')
      } else {
        alert('Somwthing went wrong');
      }
    }, (err) => {
      console.log(err);
    })
    return this.allEmployees
  }

  //Edit employee
  editEmployee(id: number) {
    this.matDialog.open(AddEmployeeComponent, {
      data: { id: id, option: 'edit employee' }
    })
  }
}
