import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { ProjectInterface } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;
  projectId: string;
  projectData: ProjectInterface[] = [];
  projectHead: string = '';
  showFullContent: boolean = false;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      if (this.projectId) {
        // Fetch and display project details using this.projectId
        this.getProjectByid()
      }
    });
  }


  toggleDescription() {
    this.showFullContent = !this.showFullContent;
  }

  getProjectByid() {
    this.projectService.fetchProjectById(this.projectId).subscribe((res: { status: string, data: ProjectInterface }) => {
      this.projectData.push(res.data);
      this.projectHead = res.data.name
    })
  }
}
