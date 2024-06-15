import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department, Employee } from 'src/app/core/models/api.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { HrService } from 'src/app/core/services/hr.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() id: string;
  @Input() option: string;

  @ViewChild('addEmployeeForm') addEmployeeForm: NgForm;

  roles = ['Employee', 'Team Leader', 'Employee', 'HR'];
  gender = ['Male', 'Female', 'Other'];
  departments: Department[] = [];

  departmentOption = 'Select Department';
  roleOption = 'Select Role';
  genderOption = 'Gender';
  departmentId: number;
  menuOpen = false;
  employeeDetailsOption: boolean = true;
  underline: boolean = false
  departmentDropDown = false;
  genderDropdown: boolean = false
  roleDropDown = false;
  file: File = null;
  selectedImage: string | null = null;
  loading: boolean = false;
  submitLoading: boolean = false;

  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService, private dialogRef: MatDialogRef<AddEmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllDepartments();
    if (this.data.option === "edit employee") {
      this.getSpecificEmployee();
    }
  }

  getAllDepartments() {
    this.departmentService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.departments = res.data;
    }, (err) => {
      console.log(err);
    })
  }

  getSpecificEmployee() {
    this.employeeService.getSpecificEmployee(this.data.id).subscribe((res: { status: string, data: Employee }) => {
      const nnormalFormDob = new Date(res.data.birthdate);
      const year = nnormalFormDob.getFullYear();
      const month = String(nnormalFormDob.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
      const day = String(nnormalFormDob.getDate()).padStart(2, '0');

      const convertedDob = `${year}-${month}-${day}`

      this.addEmployeeForm.setValue({
        fullname: res.data.fullname,
        salary: res.data.salary,
        email: res.data.email,
        designation: res.data.designation,
        phone: res.data.phone,
        birthdate: convertedDob,
        password: '',
        image: ''
      })
      this.genderOption = res.data.gender;
      this.departmentOption = res.data.department.name;
      this.roleOption = res.data.role;
    })
  }

  toggleDropdown(dropDown: string) {
    if (dropDown === 'department') {
      this.departmentDropDown = !this.departmentDropDown
    } else if (dropDown === 'role') {
      this.roleDropDown = !this.roleDropDown
    } else if (dropDown === 'gender') {
      this.genderDropdown = !this.genderDropdown
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
    } else if (kind === 'gender') {
      this.genderDropdown = false;
      this.genderOption = option;
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

  addOrEditEmployee() {
    this.loading = true;
    let employeeValues: Employee = this.addEmployeeForm.value;
    employeeValues.departmentId = this.departmentId.toString();
    employeeValues.role = this.roleOption;
    employeeValues.gender = this.genderOption;
    this.employeeService.addOrEditEmployee(employeeValues, this.file).subscribe((res: { status: string }) => {
      console.log(res);
      if (res.status === 'success') {
        this.loading = false;
        alert('Employee added');
        this.dialogRef.close('Closed')
      } else {
        this.loading = false;
        alert('Something wrong');
      }
    }, (err) => {
      this.loading = false;
      alert('Something wrong');
      console.log(err);
    })
  }

  editEmployee() {
    this.loading = true;
    let employeeValues: Employee = this.addEmployeeForm.value;
    employeeValues.departmentId = this.departments.find((x) => { return x.name === this.departmentOption }).id.toString();
    employeeValues.role = this.roleOption;
    employeeValues.gender = this.genderOption;

    this.employeeService.updateEmployee(employeeValues, this.file, this.data.id).subscribe((res) => {
      console.log(res);
      // if (res.status === 'success') {
      //   this.loading = false;
      //   alert('Employee Updated');
      //   this.snackBar.open("Employee Updates", "Close", { duration: 5000 })
      //   this.dialogRef.close('Closed')
      // } else {
      //   this.snackBar.open("Something wrong", "Close", { duration: 5000 })
      //   this.loading = false;
      // }
    }, (err) => {
      this.loading = false;
      alert('Something wrong');
      console.log(err);
    })
  }


}
