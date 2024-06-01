import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('signUpForm') signUpFormValues: NgForm;

  selectedImage: string | null = null;
  file: File = null;
  isLoading: boolean = false;
  notLoading: boolean = true;

  constructor(private authSrvc: AuthService, private route: Router) { }

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
      alert('Successfully registered');
      this.route.navigate(['payment']);
    }, (err) => {
      console.log(err);
      this.isLoading = false;
      this.notLoading = true;
      alert('An error Occured');
    })
  }

}
