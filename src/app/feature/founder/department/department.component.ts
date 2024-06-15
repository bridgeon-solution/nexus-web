import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from 'src/app/core/models/api.model';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('addDepartmentForm') values: NgForm;
  departments: Department[] = [];
  addDepartmentPage: boolean = true;
  manageDepartmentPage: boolean = false;

  constructor(private departmnetService: DepartmentService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  pageSelection(page: string) {
    if (page === 'adding') {
      this.addDepartmentPage = true;
      this.manageDepartmentPage = false;
    } else if (page === 'manange') {
      this.addDepartmentPage = false;
      this.manageDepartmentPage = true;
      this.fetchDepartments()
    }
  }

  addDepartment() {
    this.departmnetService.addDepartment(this.values.value).subscribe((res: { status: string }) => {
      if (res.status === 'success') {
        this.snackBar.open('Successfully Created', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Position the snackbar
          verticalPosition: 'top',
        });
      } else {
        this.snackBar.open('Error while creating', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Position the snackbar
          verticalPosition: 'top',
        });
      }
    }, (err) => {
      console.log(err);
      this.snackBar.open('Error while creating', 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center', // Position the snackbar
        verticalPosition: 'top',
      });
    })
  }

  fetchDepartments() {
    this.departmnetService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.departments = res.data;
    })
  }

  deleteDepartment(id) {
    this.departmnetService.delete(id).subscribe((res: { status: string }) => {
      if (res.status === 'success') {
        this.snackBar.open('Successfully Created', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Position the snackbar
          verticalPosition: 'top',
        });
      }
    }, (err) => {
      console.log(err);
      this.snackBar.open('Error occured', 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center', // Position the snackbar
        verticalPosition: 'top',
      });
    })
    this.fetchDepartments()
  }

}
