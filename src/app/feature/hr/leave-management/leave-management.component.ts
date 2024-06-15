import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent {
  isDropdownOpen = false;
  employeeLeaveOption: boolean = true;
  menuOpen = false;

  constructor() { }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectLeaveOption() {
    this.employeeLeaveOption = !this.employeeLeaveOption;
  }

  approved() {
  }
}
