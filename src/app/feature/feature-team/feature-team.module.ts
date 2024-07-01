import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTeamComponent } from './view-team/view-team.component';
import { FeatureTeamRoutingModule } from './feature-team-routing.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddToTeamComponent } from './add-to-team/add-to-team.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewTeamComponent,
    AddTeamComponent,
    AddToTeamComponent,
  ],
  imports: [
    CommonModule,
    FeatureTeamRoutingModule,
    FormsModule
  ]
})
export class FeatureTeamModule { }
