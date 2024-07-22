
export interface PermissionEmp {
  id: number,
  employeeId: number,
  permissonsId: number,
  enabled: boolean,
  permission: {
    id: number,
    name: string
  }
}

export interface AllPermissionEmp {
  status: string
  data: [PermissionEmp]
}