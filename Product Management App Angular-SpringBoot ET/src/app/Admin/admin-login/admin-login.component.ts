import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  emailId: any = '';
  password: any = '';
  errorMsg: any = '';

  constructor(protected router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {

    this.authService.authAdminLogin(this.emailId, this.password);

    // if ((this.emailId === "usama" && this.password === "usama") || (this.emailId === "" && this.password === "")) {
    //   this.router.navigate(['admin_home']);
    // }

    if(this.authService.isAdminLoggedIn())       this.router.navigate(['admin_home']);

    else this.errorMsg = "Invalid Credentials :( ";

  }

}
