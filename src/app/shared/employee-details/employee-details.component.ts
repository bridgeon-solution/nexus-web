import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Department, Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  animations: [
    trigger('employeeAnim', [
      //Entry animation
      transition('void => *', [
        //Initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate('50ms', style({
          height: '*',
          marginBottom: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(200)
      ]),
    ])
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  allEmployees: Employee[] = [];
  searchedArr: Employee[] = [];
  allDepartments: Department[] = [];
  loading: boolean = true;
  str: string;
  isDropdownOpen = false;
  employeeDetailsOption: boolean = true;
  underline: boolean = false
  menuOpen: number = null;
  searchTable: boolean = false;
  selectedOption: string = 'All';
  currentPage: number = 1;
  itemsPerPage: number = 2;
  totalItems: number;
  page: number;

  constructor(private employeeSrvc: EmployeeService, private departmentService: DepartmentService, private matDialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.fetchEmployess()
    this.fetchDepartment();
  }

  addEmployees() {
    const dialog = this.matDialog.open(AddEmployeeComponent, {
      data: { option: '' }
    });

    dialog.afterClosed().subscribe(result => {
      if (result === 'added' || 'updated') {
        this.fetchEmployess()
      }
    });
  }

  fetchEmployess() {
    this.employeeSrvc.getAllEmployees(this.currentPage, this.itemsPerPage).subscribe((res: { status: string, data: [Employee] }) => {
      this.allEmployees = res.data
    })
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
    if (this.selectedOption) {
      this.isDropdownOpen = false;
    }
  }

  filterEmployee() {
    if (this.selectedOption === "All") {
      return this.allEmployees
    }
    return this.allEmployees.filter((x) => { return x.department.name.toLowerCase().includes(this.selectedOption.toLowerCase()) });
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
  }

  // deleting employee
  deleteEmployee(id: number) {
    console.log(id);
    this.employeeSrvc.deleteEmployee(id).subscribe((res: { status: string, data: [Employee] }) => {
      if (res.status === 'success') {
        this.snackBar.open("Deleted", "Colse", { duration: 5000 });
        this.fetchEmployess()
      } else {
        this.snackBar.open("Somwthing went wrong", "Colse", { duration: 5000 });
      }
    }, (err) => {
      this.snackBar.open("Somwthing went wrong", "Colse", { duration: 5000 });
    })
    return this.allEmployees
  }

  //Edit employee
  editEmployee(id: number) {
    const dialog = this.matDialog.open(AddEmployeeComponent, {
      data: { id: id, option: 'edit employee' }
    })
    dialog.afterClosed().subscribe(result => {
      if (result === 'added' || 'updated') {
        this.fetchEmployess()
      }
    });
  }

  onPageChange(page: number): void {
    console.log(page);

    this.currentPage = page;
    this.fetchEmployess();
  }


}
