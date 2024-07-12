import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectInterface } from 'src/app/core/models/project.model';
import { AllTasksData, ProjectTeam, TasksData } from 'src/app/core/models/tasks.interface';
import { ProjectService } from 'src/app/core/services/project.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TeamService } from 'src/app/core/services/team.service';
@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  onDragOver($event: DragEvent) {
    event.preventDefault()
  }

  onDragStart(item: TasksData) {
    this.currentItem = item
  }
  currentItem: TasksData
  isDropdownOpen: boolean = false;
  allProjects: ProjectInterface[] = []
  projectId: string
  allTasks: TasksData[] = []
  selectedProject: ProjectTeam
  selectedProjectId: string
  selectedOption: string = 'Select Project Here ...';
  constructor(private taskService: TasksService, private projectService: ProjectService, private matDialog: MatDialog, private teamService: TeamService) { }
  ngOnInit(): void {
    this.fetchProject()
  }

  filterTickets(status: string) {
    return this.allTasks.filter(tickets => tickets.status == status)
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
      this.allTasks = res.data
    })
  }
  //fetchTasksByProjectandEmpId (if the role is Employee)
  fetchTasksByAssignee() {

  }

  //fetch team by ProjectId to display the team members assigned to this project
  fetchTeamMembers(projectId: string) {
    this.teamService.fetchTeamByProject(projectId).subscribe((res: { status: string, data: ProjectTeam }) => {
      this.selectedProject = res.data
    })
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  selectOption(projectName: string, projectId: string): void {
    this.selectedOption = projectName
    this.selectedProjectId = projectId
    if (this.selectedOption) {
      this.isDropdownOpen = false
    }
    const role = localStorage.getItem('role');
    const currentUserId: string = localStorage.getItem('id')
    if (role === 'Team Leader') {
      this.fetchTeamMembers(projectId)
      this.fetchTasksByProject(projectId)
    }
  }

  openAddTaskComponent() {
    const dialog: MatDialogRef<AddTaskComponent, any> = this.matDialog.open(AddTaskComponent, {
      data: { option: this.selectedProject },
    })
    dialog.afterClosed().subscribe(() => {
      this.taskService.getTasksByProject(this.projectId).subscribe((res) => {
        console.log(res)
      })
    })
  }

  onDrop(event: DragEvent, status: string): void {
    event.preventDefault();
    const taskIndex = this.allTasks.findIndex(task => task._id === this.currentItem._id);
    if (taskIndex !== -1) {
      this.allTasks[taskIndex].status = status; // Update the status of the task object in the array
      // Update the task in the backend
      this.taskService.updateTask(this.currentItem._id, status).subscribe(response => {
        // Handle success response if needed
        console.log(response)
      }, error => {
        console.error('Error updating task status:', error);
      });
    }
    this.currentItem = null;
  }
}
