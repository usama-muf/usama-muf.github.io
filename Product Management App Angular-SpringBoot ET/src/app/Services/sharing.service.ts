import { Injectable } from '@angular/core';
import { PotentialReview } from 'src/PotentialReview';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  
  private _data: any;
  private potentialReview:any;
  private email:any;
  
  constructor() { }
  
  public getProductCode() {
    return this._data;
  }
  public setProductCode(value:any) {
    this._data = value;
  }

  public setPotentialReivew(potentialReview:any) {
    this.potentialReview = potentialReview;
  }
  
  public getPotentialReview(){
    return this.potentialReview;
  }
  
  
  setUserEmail(email:any):any {
    this.email = email;

  }

  getUserEmail(): any {
    return this.email;
  }
}
