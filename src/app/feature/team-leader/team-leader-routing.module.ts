import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeaveComponent } from "./leave/leave.component";
import { ProjectComponent } from "../feature-project/project/project.component";

const routes: Routes = [
    {path:'leave-request',component: LeaveComponent},
    {path:'project',component: ProjectComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamLeaderRoutingModule { }