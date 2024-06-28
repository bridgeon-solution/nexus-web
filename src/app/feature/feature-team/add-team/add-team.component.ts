import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  addTeamPage: boolean = true;
  addToTeamPage: boolean = false;
  manageTeamsPage: boolean = false
  constructor(private teamService: TeamService, private snackBar: MatSnackBar) { }

  @ViewChild('addTeamForm') values: NgForm
  addTeam() {
    this.teamService.addTeam(this.values.value).subscribe((res: Team) => {
      console.log(res)
      if (res.status === 'success') {
        this.values.reset()
        this.snackBar.open(`Team Successfully Created`, 'Close', {
          duration: 3000, //Duration 3 seconds (3000ms)
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    }, (error) => {
      console.log(error);
      this.values.reset()
      this.snackBar.open(error.error.message, 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    })
  }



  changePage(pageName: string) {
    if (pageName === 'addToTeamPage') {
      this.addToTeamPage = true
      this.addTeamPage = false
      this.manageTeamsPage = false
    }
    if (pageName === 'addTeamPage') {
      this.addTeamPage = true
      this.addToTeamPage = false
      this.manageTeamsPage = false
    }
    if (pageName === 'manageTeamsPage') {
      this.manageTeamsPage = true
      this.addTeamPage = false
      this.addToTeamPage = false
    }
  }
}
