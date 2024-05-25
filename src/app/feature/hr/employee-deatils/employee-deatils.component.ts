import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-deatils',
  templateUrl: './employee-deatils.component.html',
  styleUrls: ['./employee-deatils.component.css']
})
export class EmployeeDeatilsComponent implements OnInit {

  ngOnInit(): void {

  }
  isDropdownOpen: boolean = false;
  employeeDetailsOption: boolean = true;
  selectEmpOptions() {
    this.employeeDetailsOption = !this.employeeDetailsOption;
  }
}
