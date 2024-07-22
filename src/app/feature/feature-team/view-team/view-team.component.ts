import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/core/services/permission.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  constructor(private router: Router, private permissionService: PermissionService) { }
  teamViewPage: boolean = true;
  showCommunication: boolean = false
  changePage(pageName: string) {
    if (pageName === 'view teams') {
      this.showCommunication = false
      this.teamViewPage = true
    }

    if (pageName === 'communication') {
      this.showCommunication = true
      this.teamViewPage = false
    }
  }

  ngOnInit(): void {
    this.permissionSetting()
  }

  goToAddTeam() {
    this.router.navigate(['/addteam'])
  }
  chatPage: boolean = true;

  permissionSetting() {
    this.permissionService.getPermissionByEmpId(this.permissionService.id).subscribe((res) => {
      this.permissionService.setPermission(res.data);
    })
  }

  hasPermission(permissionName: string) {
    return this.permissionService.hasPermission(permissionName)
  }
}
