import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct() {
    this.router.navigate(['search_product']);
  }

  registerProduct() {
    this.router.navigate(['register_product']);
  }
}
