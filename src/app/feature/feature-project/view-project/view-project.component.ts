import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  allProjects: any[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllProjects()
  }

  getAllProjects() {
    this.projectService.fetchAllProjects().subscribe((res: { status: string, data: any }) => {
      console.log(res);
      this.allProjects = res.data;
      console.log(this.allProjects);
      
    })
  }
}
