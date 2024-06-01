import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department, Employee } from 'src/app/core/models/api.model';
import { HrService } from 'src/app/core/services/hr.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('addEmployeeForm') addEmployeeForm: NgForm;

  roles = ['Employee', 'Team leader', 'Project manage', 'Test Manager'];
  departments: Department[] = [];

  departmentOption = 'Select Department';
  roleOption = 'Select Role';
  departmentId: number;
  menuOpen = false;
  employeeDetailsOption: boolean = true;
  underline: boolean = false
  departmentDropDown = false;
  roleDropDown = false;
  file: File = null;
  selectedImage: string | null = null;

  constructor(private hrSrvc: HrService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments() {
    this.hrSrvc.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.departments = res.data;
    }, (err) => {
      console.log(err);
    })
  }

  toggleDropdown(dropDown: string) {
    if (dropDown === 'department') {
      this.departmentDropDown = !this.departmentDropDown
    } else if (dropDown === 'role') {
      this.roleDropDown = !this.roleDropDown
    }
  }

  selectOption(option: string, kind: string, id?: number) {
    if (kind === 'department') {
      this.departmentId = id;
      this.departmentDropDown = false;
      this.departmentOption = option;
    } else if (kind === 'role') {
      this.roleDropDown = false;
      this.roleOption = option;
    }
  }

  selectFile(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    this.addEmployeeForm.value.image = event.target.files[0];
    if (event.target.files.length > 0) {
      this.file = <File>event.target.files[0];
      this.addEmployeeForm.value.image = this.file;
    }
  }

  addEmployee() {
    let employeeValues: Employee = this.addEmployeeForm.value;
    employeeValues.departmentId = this.departmentId.toString();
    employeeValues.role = this.roleOption;
    this.hrSrvc.addEmployee(employeeValues, this.file).subscribe((res: { status: string }) => {
      console.log(res);
      if (res.status === 'success') {
        alert('Employee added');
      } else {
        alert('Something wrong');
      }
    }, (err) => {
      console.log(err);
    })
  }

  // selectEmpOptions() {
  //   this.employeeDetailsOption = !this.employeeDetailsOption;
  //   this.underline = !this.underline
  // }
}
