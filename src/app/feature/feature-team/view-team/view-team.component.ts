import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/core/services/permission.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit{
  constructor(private router: Router, private permissionService: PermissionService) { }
  teamViewPage: boolean = true;
  teamManagePage: any;
  changePage(pageName: string) {

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
