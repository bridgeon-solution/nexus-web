import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { founderDetails } from 'src/app/core/models/admin.model';

import { userLogin } from 'src/app/core/models/userlogin.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'scale(0.9)' }),
        animate('0.6s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar
  ) { }


  openloginForm() {
    const username = this.form.value.username;
    const password = this.form.value.password;

    const loginDatas: userLogin = this.form.value;

    this.authService.login(loginDatas).subscribe((res: { status: string, data: founderDetails, token: string }) => {
      const id: string = res.data.id.toString()
      localStorage.setItem('token', `Bearer ${res.token}`);
      localStorage.setItem('id', id);
      this.snackBar.open(res.status, 'Close', { duration: 5000 });

      this.router.navigate(['home']);
    }, (err) => {
      console.log(err);
      this.snackBar.open('User Not Found', 'Close', { duration: 5000 });

    })
  }


}
