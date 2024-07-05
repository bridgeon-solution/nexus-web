import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeaveComponent } from "./leave/leave.component";
import { ProjectComponent } from "../feature-project/project/project.component";
import { ViewProjectComponent } from "../feature-project/view-project/view-project.component";

const routes: Routes = [
    {path:'leave-request',component: LeaveComponent},
    {path:'project',component: ProjectComponent},
    {path:'view-project/:id',component: ViewProjectComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamLeaderRoutingModule { }