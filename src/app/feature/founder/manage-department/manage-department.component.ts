import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from 'src/app/core/models/api.model';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-manage-department',
  templateUrl: './manage-department.component.html',
  styleUrls: ['./manage-department.component.css'],
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0,
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ManageDepartmentComponent implements OnInit {

  departments: Department[] = [];

  constructor(private departmnetService: DepartmentService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchDepartments()
  }

  fetchDepartments() {
    this.departmnetService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.departments = res.data;
    })
  }

  deleteDepartment(id) {
    this.departmnetService.delete(id).subscribe((res: { status: string }) => {
      if (res.status === 'success') {
        this.snackBar.open('Deleted', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Position the snackbar
          verticalPosition: 'top',
        });
        this.fetchDepartments();
      }
    }, (err) => {
      console.log(err);
      this.snackBar.open('Error occured', 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center', // Position the snackbar
        verticalPosition: 'top',
      });
    })
  }
}
