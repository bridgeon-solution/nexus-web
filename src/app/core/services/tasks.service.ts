import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllTasksData, TasksData, TasksDataResponse } from '../models/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  createTasks(tasksData: TasksData): Observable<TasksDataResponse> {
    return this.http.post<TasksDataResponse>(`http://localhost:4004/api/v1/tasks/create`, tasksData)
  }

  getTasksByProject(projectId: string): Observable<AllTasksData> {
    return this.http.get<AllTasksData>(`http://localhost:4004/api/v1/tasks/project/${projectId}`)
  }

  getTasksByAssignee(assigneeId: string, projectId: string): Observable<AllTasksData> {
    return this.http.get<AllTasksData>(`http://localhost:4004/api/v1/tasks/${assigneeId}/${projectId}`)
  }

  updateTask(taskId: string, status: string) {
    return this.http.patch<TasksDataResponse>(`http://localhost:4004/api/v1/tasks/projects/${taskId}`, { status })
  }

  addTask(assigneeId: number, projectId: String, title: string, dueDate: Date) {
    const tasks = {
      title: title,
      dueDate: dueDate.toString(),
      assignedTo: assigneeId,
      projectId: projectId
    }
    return this.http.post(`http://localhost:4004/api/v1/tasks/create`, tasks)
  }
}
