import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }), // Start from left, 100% off-screen
        animate('0.9s ease-in-out') // Animate for 0.5 seconds with ease-in-out timing
      ])
    ])
  ]
})
export class SignUpComponent implements OnInit {
  @ViewChild('signUpForm') signUpFormValues: NgForm;

  selectedImage: string | null = null;
  file: File = null;
  isLoading: boolean = false;
  notLoading: boolean = true;

  constructor(private authSrvc: AuthService, private route: Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {

  }

  selectFile(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    this.signUpFormValues.value.image = event.target.files[0];
    if (event.target.files.length > 0) {
      this.file = <File>event.target.files[0];
      this.signUpFormValues.value.image = this.file;
    }
  }

  signUp() {
    this.isLoading = true;
    this.notLoading = false;
    this.authSrvc.signup(this.signUpFormValues, this.file).subscribe((res: { message: string }) => {
      localStorage.setItem('email', this.signUpFormValues.value.email);
      if (res.message) {
        this.isLoading = false;
        this.notLoading = true;
      }
      this.snackBar.open("Successfully Registered","",{duration:5000, direction:'ltr'});
      this.route.navigate(['payment']);
    }, (err) => {
      console.log(err);
      this.isLoading = false;
      this.notLoading = true;
      this.snackBar.open("An Error Occured","",{duration:5000})
    })
  }

  loginWithGoogle() {
    this.authSrvc.loginWithGoogle()
  }

}
