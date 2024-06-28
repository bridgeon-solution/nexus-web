import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { FounderService } from 'src/app/core/services/founder.service';

@Component({
  selector: 'app-top-profile',
  templateUrl: './top-profile.component.html',
  styleUrls: ['./top-profile.component.css']
})
export class TopProfileComponent implements OnInit {

  id: string = localStorage.getItem('id');
  employeeData: Employee[] = []

  constructor(private employeeService: EmployeeService, private founderService: FounderService) { }

  ngOnInit(): void {
    this.employee()
  }

  employee() {
    if (localStorage.getItem('role') === 'founder') {
      this.founderService.fetchFounder(this.id).subscribe((res: { status: string, data: Employee }) => {
        this.employeeData.push(res.data);
      })
    } else {
      this.employeeService.getEmployeeId(this.id).subscribe((res: { status: string, data: Employee }) => {
        this.employeeData.push(res.data);
      })
    }
  }

}
