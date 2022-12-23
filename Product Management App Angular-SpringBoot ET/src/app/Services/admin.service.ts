import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  baseUrl="http://localhost:8090/api/v1/reviews/pr";

  constructor(private http: HttpClient) { }


  getPotentialReviews() {
    return this.http.get(this.baseUrl);
  }

}
