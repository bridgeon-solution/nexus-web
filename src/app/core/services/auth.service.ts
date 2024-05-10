import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient);


  constructor() { }

  founderSignup(formValues: NgForm, file: File):Observable<object> {
    const signUpValues: FormData = new FormData();
    
    signUpValues.append('profileimage', file);
    signUpValues.append('fullname', formValues.value.fullname);
    signUpValues.append('email', formValues.value.email);
    signUpValues.append('companyname', formValues.value.companyname);
    signUpValues.append('password', formValues.value.password);
    return this.http.post('http://localhost:4000/api/v1/founders/signup', signUpValues);
  }

}
