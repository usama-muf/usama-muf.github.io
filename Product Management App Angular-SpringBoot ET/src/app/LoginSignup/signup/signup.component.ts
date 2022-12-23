import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  password: string = '';
  confirmPassword: string = '';
  alreadyRegistered: any = '';
  errorMsg: string = '';
  successMsg: string = '';
  result: any = '';
  user = new User();


  constructor(protected router: Router, private userService: UserService) { }

  ngOnInit(): void { }


  submitDetails() {
    this.errorMsg = '';
    this.successMsg = '';



    // if (this.password !== this.confirmPassword) {
    //   this.errorMsg = "Password Must Match."
    //   return;
    // }


    this.userService.userAlreadyPresent(this.user.emailAddress)
      .subscribe({
        next: data => {
          this.alreadyRegistered = data;
          if (this.alreadyRegistered) {
            this.errorMsg = "User Already Present :(";
            return;
          }

          else {
            this.successMsg = "User Registered :)"
            this.errorMsg = "";
            console.log(this.user);
            this.userService.registerUser(this.user);
            this.router.navigate(['login']);
            return;
          }

        },
        error: error => {
          this.errorMsg = "Some error Occured";
          console.log(error);
          return;
        }
      });
  }

  validateEmail() {
    if (this.user.emailAddress === undefined || this.user.emailAddress.length < 5) {
      this.errorMsg = " Incorrect Email Address";
      return true;
    }
    return false;
  }

  validateFirstName() {
    if (this.user.firstName === undefined || this.user.firstName.length < 5) {
      this.errorMsg = "Incorrect First Name";
      return true;
    }
    return false;
  }

  validateLastName() {
    if (this.user.lastName === undefined || this.user.lastName.length < 5){
      this.errorMsg="Incorrect Last Name"
      return true;
    }
    return false;
  }

  validatePassword() {

    if (this.password !== this.confirmPassword) {
      this.errorMsg = "Password Must Match.";
      return true;
    }

    if (this.password === undefined || this.password==="" ) {
      this.errorMsg = "Password Must Not be Empty.";
      return true;
    }

    
    if (this.password.length < 5 ) {
      this.errorMsg = "Use strong password.";
      return true;
    }

    else {
      this.errorMsg=' ';

    }

    this.user.password = this.password;
    return false;
  }


}
