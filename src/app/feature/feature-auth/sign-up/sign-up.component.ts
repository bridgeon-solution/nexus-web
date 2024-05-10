import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
    this.route.navigate(['/payment']);
    // this.authSrvc.founderSignup(this.signUpFormValues, this.file).subscribe((res) => {
    //   console.log(res);
    //   alert('Successfully registered');
    // }, (err) => {
    //   console.log(err);
    //   alert('An error Occured');
    // })
  }

}
