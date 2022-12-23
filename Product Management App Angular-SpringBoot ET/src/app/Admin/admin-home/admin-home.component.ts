import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { RatingAndReviewsService } from 'src/app/Services/rating-and-reviews.service';
import { SharingService } from 'src/app/Services/sharing.service';
import { PotentialReview } from 'src/PotentialReview';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {


  potentialReviews: any = [];
  @Output() redirect: EventEmitter<any> = new EventEmitter();



  constructor(private adminService: AdminService,
    private rrservice: RatingAndReviewsService,
    private router: Router,
    private sharingService: SharingService) {

    }
    
    ngOnInit(): void {
    this.adminService.getPotentialReviews().subscribe({
      next: data => { this.potentialReviews = data; console.log(data) },
      error: error => console.log(error)
    })
  }


  addReview(review: PotentialReview): any {
    //add this potential review to final review database 
    
    this.rrservice.postPotentialReviewToMainDB(review);
    this.deleteReview(review.id);
    this.reloadCurrentRoute();
    
  }

  deleteReview(reviewId: any) {
    // console.log(review)
    this.rrservice.deletePotentialReview(reviewId)
      .subscribe(data => {
        console.log(data);

      });
    this.reloadCurrentRoute();

  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  logout(){
    localStorage.setItem('adminLoginValid', 'false');
    this.router.navigate(['admin_login']);
  }
}
