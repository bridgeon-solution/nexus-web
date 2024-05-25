import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  isDropdownOpen = false;
  employeeDetailsOption:boolean = true; 
  underline:boolean = false
  menuOpen = false;
  selectedOption = 'Select an option';
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectEmpOptions() {
    this.employeeDetailsOption = !this.employeeDetailsOption;
    this.underline = !this.underline
  }
}
