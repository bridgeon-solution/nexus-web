import { Employee } from "./api.model"
import { ProjectInterface } from "./project.model"
import { Team } from "./team.model"

export interface TasksData {
  _id?: string,
  title: string,
  dueDate: Date,
  assignedTo: string,
  status: 'Todo' | 'In Progress' | 'on Hold' | 'Done',
  projectId: string,
  createdAt: Date,
  updatedAt: Date
}

export interface TasksDataResponse {
  status: string,
  data: TasksData
}

export interface AllTasksData {
  status: string,
  data: [TasksData]
}

export interface ProjectTeam {
  members: [Employee],
  project: ProjectInterface,
  team: Team
}