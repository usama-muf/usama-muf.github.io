import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RatingAndReviewsService } from 'src/app/Services/rating-and-reviews.service';
import { SharingService } from 'src/app/Services/sharing.service';
import { PotentialReview } from 'src/PotentialReview';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  review = new PotentialReview();
  productCode: any = '';
  currentRate = 5.0;
  userReview = '';
  userEmail: any;

  constructor(private router: Router, private sharingService: SharingService, private reviewService: RatingAndReviewsService) {
    // this.productCode = this.sharingService.getProductCode();
    // this.userEmail = this.sharingService.getUserEmail();
    this.review.productCode = this.sharingService.getProductCode();
    this.review.reviewerEmail = this.sharingService.getUserEmail();
  }

  ngOnInit(): void {
  }

  addPotentialReview() {
    console.log(this.currentRate, this.userReview, this.productCode, this.userEmail);

    this.review.productRating = this.currentRate / 2;
    this.reviewService.postPotentialReview(this.review);
    this.router.navigate(['search_product']);
  }

  validateReview() {
    if (this.review.reviewContent === undefined || this.review.reviewContent.length < 5 || this.review.reviewContent.length > 200) {
      return true;
    }
    return false;
  }



}
