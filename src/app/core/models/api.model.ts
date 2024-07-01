interface adminLogin {
  status: string,
  token: string
}

interface Employee {
  id: number;
  fullname: string,
  email: string,
  password: string;
  phone: string,
  salary: string,
  gender: string,
  image: string;
  birthdate: string,
  role: string,
  designation: string,
  departmentId: string,
  department: {
    id: number,
    name: string
  }
}

interface Department {
  id: number;
  name: string;
}

interface LeaveData {
  _id: string,
  startDate: Date,
  endDate: Date,
  reason: string,
  leaveType: string
  employeeId: number
  days: number
  createdAt: Date
  status: string
}
interface AllLeave {
  leaveData: LeaveData,
  employee: Employee
}

export {
  adminLogin,
  Employee,
  Department,
  LeaveData,
  AllLeave
}