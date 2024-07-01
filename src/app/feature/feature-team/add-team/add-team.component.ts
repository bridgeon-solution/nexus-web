import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Team, TeamDatas } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';
import { AddToTeamComponent } from '../add-to-team/add-to-team.component';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
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
export class AddTeamComponent implements OnInit {
  addTeamPage: boolean = true;
  addToTeamPage: boolean = false;
  manageTeamsPage: boolean = false;
  teams: Team[] = [];
  constructor(private teamService: TeamService, private snackBar: MatSnackBar, private matDialog: MatDialog) { }

  @ViewChild('addTeamForm') values: NgForm
  addTeam() {
    this.teamService.addTeam(this.values.value).subscribe((res: TeamDatas) => {
      if (res.status === 'success') {
        this.values.reset()
        this.teams.push(res.data)
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


  ngOnInit(): void {
    this.fetchAllTeams()
  }

  fetchAllTeams() {
    this.teamService.getAllTeamsByLead().subscribe((res: { status: string, data: [Team] }) => {
      this.teams = res.data
    }, (error) => {
      console.log(error)
    })
  }

  deleteTeam(teamId: string) {
    this.teamService.deleteTeam(teamId).subscribe((res: TeamDatas) => {
      if (res.status === 'success') {
        this.teams = this.teams.filter(team => team._id !== teamId);
        this.snackBar.open('Deleted', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Position the snackbar
          verticalPosition: 'top',
        });
      }
    }, (error) => {
      this.snackBar.open(error.error.message, 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center', // Position the snackbar
        verticalPosition: 'top',
      });
    })
  }

  addMembers(teamId: string) {
    const dialog: MatDialogRef<AddToTeamComponent, any> = this.matDialog.open(AddToTeamComponent, {
      data: { option: teamId }
    })
  }

}
