import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../Services/count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


  userCount: any = '';
  reviewCount: any = '';
  productCount: any = '';


  constructor(private router: Router,
    private countService: CountService) { }

  ngOnInit(): void {
    this.productCounter();
    this.reviewCounter();
    this.userCounter();
  }



  productCounter() {
    this.countService.getProductCount()
    .subscribe({
      next: data => {
        this.productCount = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  reviewCounter() {
    this.countService.getReviewCount()
    .subscribe({
      next: data => {
        this.reviewCount = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  userCounter() {
    this.countService.getUserCount()
      .subscribe({
        next: data => {
          this.userCount = data;
        },
        error: error => {
          console.log(error);
        }
      });
  }

}
