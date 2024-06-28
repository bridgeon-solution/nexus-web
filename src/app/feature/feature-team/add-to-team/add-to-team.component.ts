import { Component } from '@angular/core';
import { Employee } from 'src/app/core/models/api.model';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-add-to-team',
  templateUrl: './add-to-team.component.html',
  styleUrls: ['./add-to-team.component.css']
})
export class AddToTeamComponent {
  constructor(private employeeService: EmployeeService) { }
  allEmployees: Employee[] = []
  getAllEmployees() {
    this.employeeService.getAllEmployees
  }
}
