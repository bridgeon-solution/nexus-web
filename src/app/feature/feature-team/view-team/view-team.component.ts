import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent {
  constructor(private router: Router) { }
  sendLeavePage: boolean = true;
  leaveHistoryPage: any;
  changePage(pageName: string) {

  }


  goToAddTeam() {
    this.router.navigate(['/addteam'])
  }
  chatPage: boolean = true;

}
