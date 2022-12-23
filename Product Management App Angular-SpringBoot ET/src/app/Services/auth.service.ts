import { Injectable, Output } from '@angular/core';
import { SharingService } from './sharing.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoginValid:any=false;
  adminLoginValid:any;
  loginData:any;


  constructor(private userService: UserService,
    private sharingService: SharingService) { }

  authUserLogin(emailId:string, password:string) {

    this.userService.isLoginValid(emailId, password).subscribe(data=>{this.userLoginValid=data; console.log(this.userLoginValid)});
    // console.log(this.userLoginValid);

    // this.userService.getUser(emailId)
    //   .subscribe({
    //     next: data => {
    //       this.loginData = data;

    //       if(this.loginData.password === password) {
    //         this.userLoginValid = localStorage.setItem('userLoginValid', 'true');
    //         this.userLoginValid=true;
    //       }
    //       else {
    //         this.userLoginValid=false;
    //       }

    //     },
    //     error: error => {
    //       console.log(error);
    //       return 500;
    //     }
    //   });

      
      return this.userLoginValid;

  }

  //used for normal login
  isUserLoggedIn() {
    return this.userLoginValid;
  }


  authAdminLogin(emailId:string, password:string) {

    if(emailId === "usama" && password === "usama") {
      this.adminLoginValid = localStorage.setItem('adminLoginValid', 'true');
      this.adminLoginValid = true;
    }
  }

  isAdminLoggedIn() {
    return this.adminLoginValid;
  }



}
