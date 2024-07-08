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