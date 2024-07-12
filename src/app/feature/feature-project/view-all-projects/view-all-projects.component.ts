import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { ProjectInterface } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.css']
})
export class ViewAllProjectsComponent implements OnInit {
  allProjects: ProjectInterface[] = [];
  mode: ProgressBarMode = 'determinate';
  // value:number = 0;
  bufferValue = 75;
  isTruncated = true;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProjects()

  }


  toggleDescription() {
    this.isTruncated = !this.isTruncated;
  }

  getAllProjects() {
    const teamLeadId: string = localStorage.getItem('id')
    this.projectService.fetchProjectByTeamLead(teamLeadId).subscribe((res: { status: string, data: [ProjectInterface] }) => {
      console.log(res);
      this.allProjects = res.data;
    }, (error) => {
      console.log(error)
    })
  }

  viewProject(id: string) {
    this.router.navigateByUrl(`home/view-project/${id}`);
  }
}
