import { RouterModule, Routes } from "@angular/router";
import { ViewTeamComponent } from "./view-team/view-team.component";
import { NgModule } from "@angular/core";
import { AddTeamComponent } from "./add-team/add-team.component";

const routes: Routes = [
  { path: 'Team', component: ViewTeamComponent },
  { path: 'addteam', component: AddTeamComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureTeamRoutingModule { }