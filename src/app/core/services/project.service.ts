import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectInterface } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  createProject(data: ProjectInterface, file: File, teamId: string): Observable<object> {
    const startDate: string = data.startDate.toString();
    const endtDate: string = data.endDate.toString();
    const teamLeadId: string = localStorage.getItem('id');
    const projectData: FormData = new FormData();
    projectData.append('image', file);
    projectData.append('name', data.name);
    projectData.append('teamLeadId', teamLeadId)
    projectData.append('description', data.description);
    projectData.append('startDate', startDate);
    projectData.append('endDate', endtDate);
    return this.http.post(`http://localhost:4004/api/v1/projects/create/${teamId}`, projectData)
  }

  fetchAllProjects(): Observable<object> {
    return this.http.get(`http://localhost:4004/api/v1/projects/`)
  }

  fetchProjectById(id: string): Observable<object> {
    return this.http.get<ProjectInterface>(`http://localhost:4004/api/v1/projects/${id}`)
  }

  fetchProjectByTeamLead(teamLeadId: string) {
    return this.http.get(`http://localhost:4004/api/v1/projects/teamLead/${teamLeadId}`)
  }

}
