import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermissionComponent } from "./permission/permission.component";

const routes: Routes = [
  { path: 'permissions/:employeeId', component: PermissionComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturePermissionRouting { }