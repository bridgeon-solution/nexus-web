import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  allEmployees: Employee
  constructor(public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { option: string }, private employeeService: EmployeeService) { }

  ngOnInit(): void {

  }

  fetchEmployees() {

  }
}

