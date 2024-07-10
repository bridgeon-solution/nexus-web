import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponseData, TeamData } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  addTeam(teamData: TeamData): Observable<TeamResponseData> {
    return this.http.post<TeamResponseData>('http://localhost:4003/api/v1/teams/create', teamData)
  }

  deleteTeam(teamId: string): Observable<TeamResponseData> {
    return this.http.delete<TeamResponseData>(`http://localhost:4003/api/v1/teams/${teamId}`)
  }

  updateTeam(teamId, updateData: TeamData): Observable<TeamResponseData> {
    return this.http.patch<TeamResponseData>(`http://localhost:4003/api/v1/teams/${teamId}`, updateData)
  }

  getAllTeamsByLead(): Observable<Object> {
    return this.http.get(`http://localhost:4003/api/v1/teams/teamlead/teams`)
  }

  getAllTeams(): Observable<Object> {
    return this.http.get<Object>(`http://localhost:4003/api/v1/teams/`)
  }

  fetchTeamByProject(projectId: string) {
    return this.http.get(`http://localhost:4004/api/v1/projects/team-details/${projectId}`)
  }
}
