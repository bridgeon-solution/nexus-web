import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from 'src/app/shared/payment/payment.component';

const routes: Routes = [
    { path: '', component: SignUpComponent},
    { path: 'login', component: LoginComponent},
    { path: 'payment', component: PaymentComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureAuthRoutingModule { }
