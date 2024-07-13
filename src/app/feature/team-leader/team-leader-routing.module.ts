import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeaveComponent } from "./leave/leave.component";
import { ProjectComponent } from "../feature-project/project/project.component";
import { ViewProjectComponent } from "../feature-project/view-project/view-project.component";
import { ViewTasksComponent } from "../feature-tasks/view-tasks/view-tasks.component";
import { VideoCallComponent } from "../feature-communication/video-call/video-call.component";

const routes: Routes = [
    { path: 'leave-request', component: LeaveComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'view-project/:id', component: ViewProjectComponent },
    { path: 'task', component: ViewTasksComponent },
    { path: 'video-call', component: VideoCallComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamLeaderRoutingModule { }