import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { ProfileComponent } from './shared/profile/profile.component';
const routes: Routes = [
  { path: 'registration', loadChildren: () => import('./feature/feature-auth/feature-auth.module').then(m => m.FeatureAuthModule) },
  { path: "", redirectTo: 'registration', pathMatch: 'full' },
  {
    path: 'home', component: SideNavComponent, children: [
      { path: '', loadChildren: () => import('./feature/hr/hr.module').then(m => m.HRModule) },
      { path: '', loadChildren: () => import('./feature/founder/founder.module').then(m => m.FounderModule) },
      { path: '', loadChildren: () => import('./feature/team-leader/team-leader.module').then(m => m.TeamLeaderModule) },
      { path: 'profile', component: ProfileComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
