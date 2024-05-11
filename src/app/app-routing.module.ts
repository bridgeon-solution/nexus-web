import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './shared/payment/payment.component';

const routes: Routes = [
  { path: 'registration', loadChildren: () => import('./feature/feature-auth/feature-auth.module').then(m => m.FeatureAuthModule) },
  { path: "", redirectTo: 'registration', pathMatch: 'full' },
  { path: 'adminhome', loadChildren: () => import('./feature/feature-admin/feature-admin.module').then(m => m.FeatureAdminModule) },
  { path: "payment", component: PaymentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
