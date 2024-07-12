import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/core/models/api.model';
import { ProjectTeam } from 'src/app/core/models/tasks.interface';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('taskValues') taskValues: NgForm

  teamMembers: Employee[]
  selectedOption: string = 'Select Team Member ...';
  isDropDown: boolean = false
  endDate: Date;
  selectedMemberId: number;
  constructor(public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { option: ProjectTeam }, private taskService: TasksService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data && this.data.option) {
      this.teamMembers = this.data.option.members;
    } else {
      console.error('No project data found');
    }
  }

  toggleDropdown(event: Event) {
    event.preventDefault()
    this.isDropDown = !this.isDropDown
  }

  selectOption(employeeName: string, employeeId: number) {
    this.selectedOption = employeeName
    this.isDropDown = false
    this.selectedMemberId = employeeId
  }

  onSubmit() {
    this.taskService.addTask(this.selectedMemberId, this.data.option.project._id, this.taskValues.value.task, this.endDate).subscribe((res) => {
      this.snackBar.open('Task Added', 'Close', { duration: 3000 })
      this.dialogRef.close()
    }, (error) => {
      this.snackBar.open(error.error.message, 'Close')
    })
  }
}
