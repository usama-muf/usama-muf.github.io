import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { PotentialReview } from 'src/PotentialReview';

@Injectable({
  providedIn: 'root'
})
export class RatingAndReviewsService {
  
  baseUrl = "http://localhost:8090/api/v1/reviews/";
  constructor(private http: HttpClient) { }
  
  getProductRating(productCode: string) {
    return this.http.get(this.baseUrl + 'rating/' + productCode)
    .pipe(catchError((err) => {
      console.log("Error occured at Rating and review service", err);
      return err
    }));
  }
  
  getProductReview(productCode: string) {
    return this.http.get(this.baseUrl + 'allReview/' + productCode)
    .pipe(catchError((err) => {
      console.log("Error occured at Rating and review service", err);
        return err
      }));
    }
    
    
    postPotentialReview(pr: PotentialReview) {
      this.http.post(this.baseUrl + "pr", pr)
      .subscribe({
        next: data => {console.log(data) }
        ,
        error: error => {
          console.log("error at service " + error)
        }
      });
    }
    
    getPotentialReviews() {
      return this.http.get(this.baseUrl + "pr");
    }
    
    postPotentialReviewToMainDB(review: PotentialReview) {
      this.http.post(this.baseUrl, review)
      .subscribe({
        next: data => {return 200; }
        ,
        error: error => {
          console.log("error at service " + error);
          return 500;
        }
      });
    }

    deletePotentialReview(reviewId: any) {
      // console.log(reviewId);
      return this.http.delete(this.baseUrl+"pr/"+reviewId);
    }
    
}
