import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectInterface } from 'src/app/core/models/project.model';
import { Team } from 'src/app/core/models/team.model';
import { ProjectService } from 'src/app/core/services/project.service';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @ViewChild('signUpForm') projectValues: NgForm;

  teams: Team[] = [];
  disableSelect = new FormControl(false);
  selectedTemeId: string = '';
  startDate: Date;
  endDate: Date;
  selectedImage: string | null = null;
  file: File = null;

  constructor(private teamService: TeamService, private projectService: ProjectService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTeam()
  }

  getTeam() {
    this.teamService.getAllTeamsByLead().subscribe((res: { status: string, data: Team[] }) => {
      this.teams = res.data
    })
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

    this.projectValues.value.image = event.target.files[0];
    if (event.target.files.length > 0) {
      this.file = <File>event.target.files[0];
      this.projectValues.value.image = this.file;
    }
  }

  addProject() {
    const temaId: string = this.selectedTemeId;
    const projectData: ProjectInterface = this.projectValues.value;
    console.log(projectData.endDate);

    this.projectService.createProject(projectData, this.file, temaId).subscribe((res: { status: string, data: ProjectInterface }) => {
      if (res.status === "success") {
        this.snackBar.open("Project Created", "", { duration: 5000 });
      } else {
        this.snackBar.open("Something went wrong", "", { duration: 5000 });
      }
    })
  }
}
