import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';
import { TeamDetailedViewComponent } from '../team-detailed-view/team-detailed-view.component';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {
  id: number = Number(localStorage.getItem('id'));
  teams: Team[] = [];
  role: string = localStorage.getItem('role')
  employeeId: number = Number(localStorage.getItem('id'))

  constructor(private teamService: TeamService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.role !== "Employee") {
      this.fetchTeams();
    } else {
      this.fetchAllTeams()
    }
  }

  fetchTeams() {
    this.teamService.getAllTeamsByLead().subscribe((res: { status: string, data: Team[] }) => {
      this.teams = res.data;
    })
  }

  fetchAllTeams() {
    this.teamService.getAllTeams().subscribe((res: { status: string, data: Team[] }) => {
      this.teams = res.data.filter((x) => { return x.members.includes(this.employeeId) });
    })
  }

  viewMeambers(teamId: string) {
    this.dialog.open(TeamDetailedViewComponent, {
      data: { option: 'tl', id: teamId },
      width: '400px',
      height: '300px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    })
  }
}
