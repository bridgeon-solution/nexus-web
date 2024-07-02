import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { EmployeesComponent } from "../feature-permission/employees/employees.component";
import { PermissionComponent } from "../feature-permission/permission/permission.component";

const routes: Routes = [
    { path: 'department', component: DepartmentComponent },
    { path: 'permissions', component: EmployeesComponent },
    { path: 'employee-permission/:id', component: PermissionComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FounderRoutingModule { }
