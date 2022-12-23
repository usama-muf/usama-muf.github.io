import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../Services/count.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }


  loginSignupRedirect() {
    this.router.navigate(['login']);

  }

  adminLoginRedirect() {
    this.router.navigate(['admin_login']);

  }



}