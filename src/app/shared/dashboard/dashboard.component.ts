import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Department, Employee } from 'src/app/core/models/api.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('numberCount', [
      transition(':enter', [
        style({ opacity: 0 }), // Start from invisible state
        animate('1.1s ease-in-out') // Animate for 1 second with easing
      ])
    ])
  ]
})

export class DashboardComponent implements OnInit {
  departmentCount: number = 0;
  employeeCount: number = 0;
  filteredData: any[] = [];
  data = [
    {
      head: 'Departments',
      count: this.departmentCount,
      subHead: 'More Info',
      link: 'home/employees',
      role: ['founder']
    },
    {
      head: 'Projects',
      count: 3,
      subHead: 'More Info',
      link: 'home/employees',
      role: ['founder']
    },
    {
      head: 'Salary',
      count: 6,
      subHead: 'More Info',
      link: 'home/employees',
      role: ['founder']
    },
    {
      head: 'Leaves',
      count: 9,
      subHead: 'More Info',
      link: 'home/employees',
      role: ['founder']
    },
    {
      icon: '../../../assets/icons/businessman_7086777.png',
      head: 'Team',
      count: 10,
      subHead: 'Team members',
      link: 'home/employees',
      role: ['Team Leader']
    },
    {
      icon: '../../../assets/icons/businessman_7086777.png',
      head: 'Employees',
      count: this.employeeCount,
      subHead: 'Employees',
      link: 'home/employees',
      role: ['HR']
    }, {
      icon: '../../../assets/icons/notes_9885627.png',
      head: 'Leaves',
      count: 1,
      subHead: 'Pending Leave',
      link: 'home/leaves',
      role: ['Team Leader', 'HR']
    }, {
      icon: '../../../assets/icons/project_7754996.png',
      head: 'Projects',
      count: 5,
      subHead: 'Ongoing Projects',
      role: ['HR']
    }, , {
      icon: '../../../assets/icons/project_7754996.png',
      head: 'Tasks',
      count: 5,
      subHead: 'Tasks',
      role: ['Team Leader']
    }, {
      icon: '../../../assets/icons/megaphone_10321186.png',
      head: 'Announcements',
      count: 1,
      subHead: 'Announcement',
      role: ['Team Leader', 'HR']
    }
  ]

  leaves = [
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
  ]
  targetNumber: number = 90;
  currentNumber: number = 0;
  role: string = localStorage.getItem('role');

  constructor(private departmentService: DepartmentService,private employeeServcie:EmployeeService) { }

  ngOnInit(): void {
    // this.animateNumber()
    this.data.forEach((element) => {
      const isRolePresent = element.role.find((x) => { return x === localStorage.getItem('role') });
      if (isRolePresent !== undefined) {
        this.filteredData.push(element)
      }
    })
    this.fetchDepartment();
    // this.animateNumber()
    this.fetchEmployee()
  }

  fetchDepartment() {
    this.departmentService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.departmentCount = res.data.length
      let data = this.data.filter((x) => { return x.head === 'Departments' });
      data.map((x) => { return x.count = this.departmentCount })
    })
  }

  fetchEmployee() {
    this.employeeServcie.getAllEmployees().subscribe((res: { status: string, data: [Employee] })=>{
      console.log(res.data.length);
      this.employeeCount = res.data.length;
    })
  }

  animateNumber() {
    // console.log(this.data.map((x)=>{return x.count}));
    const intervalId = setInterval(() => {
      this.data.forEach((element) => {
        if (this.currentNumber >= element.count) {
          clearInterval(intervalId);
          return;
        }
        this.currentNumber++;
      })
      if (this.currentNumber >= this.targetNumber) {
        clearInterval(intervalId);
        return;
      }
      this.currentNumber++;

    }, 20);
  }


  getColor(head: string) {
    switch (head) {
      case 'Employees':
        return '#4E3DB8';
      case 'Team':
        return '#4E3DB8';
      case 'Leaves':
        return '#003E77';
      case 'Projects':
        return '#F8614D';
      case 'Tasks':
        return '#F8614D';
      case 'Announcements':
        return '#5FAC66';
      default:
        return 'gray'; // Default color for unknown heads
    }
  }

  founderColor(option: string) {
    switch (option) {
      case 'Departments':
        return '#6D81ED';
      case 'Projects':
        return '#003E77';
      case 'Salary':
        return '#00770C';
      case 'Leaves':
        return '#AA3B2C';
      default:
        return 'gray'; // Default color for unknown heads
    }
  }
  founderInfoColor(option: string) {
    switch (option) {
      case 'Departments':
        return '#6D81ED';
      case 'Projects':
        return '#232B58';
      case 'Salary':
        return '#166622';
      case 'Leaves':
        return '#84533E';
      default:
        return 'gray'; // Default color for unknown heads
    }
  }

}
