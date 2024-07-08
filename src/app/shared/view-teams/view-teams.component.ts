import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {
  id: number = Number(localStorage.getItem('id'));
  teams:Team[] = []

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.fetchTeams()
  }

  fetchTeams() {

    this.teamService.getAllTeams().subscribe((res: { status: string, data: Team[] }) => {
      console.log(res.data.filter((x)=>{return x.members.includes(this.id)}));
      this.teams = res.data.filter((x)=>{return x.members.includes(this.id)});
    })
  }
}
