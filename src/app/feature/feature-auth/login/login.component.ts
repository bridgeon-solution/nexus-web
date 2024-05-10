import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userLogin } from 'src/app/core/models/userlogin.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm
  constructor(private authService: AuthService) { }


  openloginForm() {
    const username = this.form.value.username
    const password = this.form.value.password
    const loginDatas: userLogin = {
      username: username,
      password: password
    }
    this.authService.login(loginDatas).subscribe((res) => {
      console.log(res)
    })
  }


}
