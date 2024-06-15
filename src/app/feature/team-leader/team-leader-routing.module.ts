import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeaveComponent } from "./leave/leave.component";

const routes: Routes = [
    {path:'leave-request',component: LeaveComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamLeaderRoutingModule { }