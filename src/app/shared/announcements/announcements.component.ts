import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  employeeDetailsOption: boolean = true;

  selectEmpOptions() {
    this.employeeDetailsOption = !this.employeeDetailsOption;
  }
}
