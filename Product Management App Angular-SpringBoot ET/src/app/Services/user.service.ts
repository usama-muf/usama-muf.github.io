import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from 'src/User';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8090/api/v1/";
  returnCode:any='';
  
  constructor(public http: HttpClient) { }


  getUser(emailId:string) {
    return this.http.get(this.baseUrl+'user/'+emailId);
  }

  isLoginValid(emailId:string, password:string) {
    return this.http.get(this.baseUrl+'user/login?emailAddress='+emailId+'&password='+password);
  }
  userAlreadyPresent(emailId:string) {
    return this.http.get(this.baseUrl+'user/check_user/'+emailId);
  }



  registerUser(user: User)  {
    this.http.post<User>(this.baseUrl+'user', user)
    .subscribe(
      {
        next: data=>{
          this.returnCode = data;
        },
        error: error=>{
          this.returnCode = 400;
          console.error("There was an error", error);
        }
      });

      return this.returnCode;
  }

}
