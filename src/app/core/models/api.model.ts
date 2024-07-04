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
  deduction: number,
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

interface EmployeePayment {
  id: number;
  fullname: string,
  email: string,
  password: string;
  phone: string,
  salary: number,
  gender: string,
  image: string;
  birthdate: string,
  deduction: number,
  role: string,
  designation: string,
  departmentId: string,
  department: {
    id: number,
    name: string
  }
}

export {
  adminLogin,
  Employee,
  Department,
  LeaveData,
  AllLeave,
  EmployeePayment
}