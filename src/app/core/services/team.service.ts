import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team, TeamData } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  addTeam(teamData: TeamData): Observable<Team> {
    return this.http.post<Team>('http://localhost:4003/api/v1/teams/create', teamData)
  }

  deleteTeam(teamId: string): Observable<Team> {
    return this.http.delete<Team>(`http://localhost:4002/api/v1/teams/${teamId}`)
  }

  updateTeam(teamId, updateData: TeamData): Observable<Team> {
    return this.http.patch<Team>(`http://localhost:4002/api/v1/teams/${teamId}`, updateData)
  }

  getAllTeamsByLead(): Observable<Team[]> {
    return this.http.get<Team[]>(`http://localhost:4002/api/v1/teams/teamlead/teams`)
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`http://localhost:4002/api/v1/teams/`)
  }

}
