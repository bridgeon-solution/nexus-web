import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMember } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {

  constructor(private http: HttpClient) { }

  addToTeam(employeeId: number, teamId: string): Observable<TeamMember> {
    return this.http.post<TeamMember>(`http://localhost:4003/api/v1/team-members/${teamId}`, { employeeId })
  }

  deleteFromTeam(employeeId: number, teamId: string) {
    return this.http.delete(`http://localhost:4003/api/v1/team-members/${teamId}/${employeeId}`)
  }
}
