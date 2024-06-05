import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { founderDetails } from 'src/app/core/models/admin.model';

import { userLogin } from 'src/app/core/models/userlogin.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm
  constructor(private authService: AuthService, private router: Router, private toast: ToastrService) { }


  openloginForm() {
    const username = this.form.value.username;
    const password = this.form.value.password;

    const loginDatas: userLogin = this.form.value;

    this.authService.login(loginDatas).subscribe((res: { status: string, data: { findFounder: founderDetails, token: string } }) => {
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      this.router.navigate(['home']);
    }, (err) => {
      console.log(err);
      alert("Not found")
    })
  }


}
