export interface AllPermission {
  status: string,
  data: [Permission]
}

export interface Permission {
  id: number,
  name: string,
  enabled: boolean
}

export interface PermissionEmp {
  id: number,
  employeeId: number,
  permissionsId: number,
  enabled: boolean
}

export interface AllPermissionEmp {
  status: string
  data: [PermissionEmp]
}