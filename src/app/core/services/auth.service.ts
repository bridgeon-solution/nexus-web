import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { userLogin } from '../models/userlogin.model';
import { adminLogin } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  signup(formValues: NgForm, file: File): Observable<object> {
    const signUpValues: FormData = new FormData();
    signUpValues.append('image', file);
    signUpValues.append('fullname', formValues.value.fullname);
    signUpValues.append('email', formValues.value.email);
    signUpValues.append('companyname', formValues.value.companyname);
    signUpValues.append('password', formValues.value.password);

    return this.http.post('http://localhost:4000/api/v1/founders/create', signUpValues);
  }


  login(loginDatas: userLogin) {
    return this.http.post("http://localhost:4000/api/v1/users/login", loginDatas)
    // return this.http.post("http://localhost:4001/api/v1/employees/login", loginDatas)
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:4000/api/v1/users/auth/google';
  }

  logOut() {
    
  }
}
