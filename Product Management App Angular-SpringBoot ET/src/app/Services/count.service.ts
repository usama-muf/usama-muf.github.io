import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  baseUrl = "http://localhost:8090/api/v1";
  constructor (private http: HttpClient){ }

  getProductCount(){
    return this.http.get(this.baseUrl+'/products/pc');


  }

  getReviewCount(){
    return this.http.get(this.baseUrl+'/reviews/rc');


  }

  getUserCount() {
    return this.http.get(this.baseUrl+'/user/uc');

  }


}
