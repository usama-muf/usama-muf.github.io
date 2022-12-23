import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { SharingService } from 'src/app/Services/sharing.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  protected emailId: string = '';
  protected password: string = '';
  errorMsg = "";

  @Output() redirect: EventEmitter<any> = new EventEmitter();

  constructor(protected router: Router,
    private authService: AuthService,
    private sharingService: SharingService) { }

  ngOnInit(): void {
  }


  login() {

    if (this.emailId.length == 0) {
      this.errorMsg = "User Name is Required";
      return;
    }
    if (this.password.length == 0) {
      this.errorMsg = "Password is Required";
      return;
    }
    else {
      this.errorMsg = "";
    }

    this.authService.authUserLogin(this.emailId, this.password);

    // console.log(this.authService.isUserLoggedIn());
    // if (result===true) {
    if (this.authService.isUserLoggedIn()) {
      this.sharingService.setUserEmail(this.emailId);
      this.router.navigate(['home_main']);
    }
    else this.errorMsg = "Invalid Credentials :(";

  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
