
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectInterface } from 'src/app/core/models/project.model';
import { AllTasksData, TasksData } from 'src/app/core/models/tasks.interface';
import { ProjectService } from 'src/app/core/services/project.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  isDropdownOpen: boolean = false;
  //allDepartments: any;
  allProjects: ProjectInterface[] = []
  projectId: string
  todo: TasksData[] = []
  inProgress: TasksData[] = []
  onHold: TasksData[] = []
  done: TasksData[] = []
  selectedOption: string = 'Select Project Here ...';
  constructor(private taskService: TasksService, private projectService: ProjectService, private matDialog: MatDialog) { }
  ngOnInit(): void {
    this.fetchProject()
  }

  fetchProject() {
    const role = localStorage.getItem('role');
    const currentUserId: string = localStorage.getItem('id')
    if (role === 'Team Leader') {
      this.fetchProjectsByTeamLead(currentUserId)
      console.log(this.allProjects)
      //this.taskService.getTasksByProject()
    } else if (role == 'Employee') {
      // this.taskService.getTasksByAssignee(assigneeId)
    }
  }
  // fetch project to filter tasks by project

  // fetch project by teamlead (if the role is team-Lead)
  fetchProjectsByTeamLead(teamleadId: string) {
    this.projectService.fetchProjectByTeamLead(teamleadId).subscribe((res: { status: string, data: [ProjectInterface] }) => {
      this.allProjects = res.data
    }, (error) => {
      console.log(error)
    })
  }

  // fetch project by 
  //fetchTasksByProject (if the role is Team lead)

  fetchTasksByProject(projectId: string) {
    this.taskService.getTasksByProject(projectId).subscribe((res: AllTasksData) => {
      const tasks = res.data
      console.log(tasks)
      this.todo = tasks.filter(task => task.status === 'Todo');
      this.inProgress = tasks.filter(task => task.status === 'In Progress');
      this.onHold = tasks.filter(task => task.status === 'on Hold');
      this.done = tasks.filter(task => task.status === 'Done')
    })
  }

  //fetchTasksByProjectandEmpId (if the role is Employee)
  fetchTasksByAssignee() {

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  selectOption(projectName: string, projectId: string): void {
    this.selectedOption = projectName
    if (this.selectedOption) {
      this.isDropdownOpen = false
    }
    const role = localStorage.getItem('role');
    const currentUserId: string = localStorage.getItem('id')
    if (role === 'Team Leader') {
      this.fetchTasksByProject(projectId)
    }
  }

  openAddTaskComponent() {
    const dialog: MatDialogRef<AddTaskComponent, any> = this.matDialog.open(AddTaskComponent, {
      data: { option: '' }
    })
  }
}
