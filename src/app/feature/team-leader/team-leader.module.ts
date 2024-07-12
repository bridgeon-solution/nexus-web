import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave/leave.component';
import { TeamLeaderRoutingModule } from './team-leader-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LeaveComponent
  ],
  imports: [
    CommonModule,
    TeamLeaderRoutingModule,
    SharedModule
  ]
})
export class TeamLeaderModule { }
