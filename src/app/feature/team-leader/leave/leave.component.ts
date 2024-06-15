import { Component } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  sendLeavePage: boolean = true;
  leaveHistoryPage: boolean = false;

  changePage(pageName: string) {
    if (pageName === "apply leave") {
      this.sendLeavePage = true;
      this.leaveHistoryPage = false;
    }
    if (pageName === "leave history") {
      this.sendLeavePage = false;
      this.leaveHistoryPage = true
    }
  }

}
