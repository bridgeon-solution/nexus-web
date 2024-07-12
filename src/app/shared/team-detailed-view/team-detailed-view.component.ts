import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/core/models/api.model';
import { TeamWithTeamMeambers } from 'src/app/core/models/team.model';
import { TeamMembersService } from 'src/app/core/services/team-members.service';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-team-detailed-view',
  templateUrl: './team-detailed-view.component.html',
  styleUrls: ['./team-detailed-view.component.css']
})
export class TeamDetailedViewComponent implements OnInit {
  teamMeambers: Employee[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: { option: string, id: string }, private teamMemebrService: TeamMembersService) { }

  ngOnInit(): void {
    this.fetchTeam()
  }

  fetchTeam() {
    this.teamMemebrService.getTeamMeambers(this.data.id).subscribe((res: TeamWithTeamMeambers) => {
      this.teamMeambers = res.data.members;
    })
  }

}
