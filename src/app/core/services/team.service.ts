import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamDatas, TeamData } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  addTeam(teamData: TeamData): Observable<TeamDatas> {
    return this.http.post<TeamDatas>('http://localhost:4003/api/v1/teams/create', teamData)
  }

  deleteTeam(teamId: string): Observable<TeamDatas> {
    return this.http.delete<TeamDatas>(`http://localhost:4003/api/v1/teams/${teamId}`)
  }

  updateTeam(teamId, updateData: TeamData): Observable<TeamDatas> {
    return this.http.patch<TeamDatas>(`http://localhost:4003/api/v1/teams/${teamId}`, updateData)
  }

  getAllTeamsByLead(): Observable<Object> {
    return this.http.get(`http://localhost:4003/api/v1/teams/teamlead/teams`)
  }

  getAllTeams(): Observable<Object> {
    return this.http.get<Object>(`http://localhost:4003/api/v1/teams/`)
  }

}
