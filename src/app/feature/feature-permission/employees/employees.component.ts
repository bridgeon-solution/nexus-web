import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0,
          }),
          stagger(100, [
            animate('1s ease')
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEmployees()
  }

  fetchEmployees() {
    this.employeeService.getAllEmployees(1, 10).subscribe((res: { status: string, data: { data: [Employee] } }) => {
      this.employees = res.data.data;
    })
  }

  clickOn(id: number) {
    this.router.navigate(['permissions/', id])
  }

}
