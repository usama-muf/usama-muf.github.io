import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './headersAndFooters/header/header.component';
import { FooterComponent } from './headersAndFooters/footer/footer.component';
import { RegisterProductComponent } from './Product/register-product/register-product.component';
import { SearchProductComponent } from './Product/search-product/search-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddReviewComponent } from './Review/add-review/add-review.component';
import { LoginUserComponent } from './LoginSignup/login-user/login-user.component';
import { SignupComponent } from './LoginSignup/signup/signup.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { HeaderWbtnComponent } from './headersAndFooters/header-wbtn/header-wbtn.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterProductComponent,
    SearchProductComponent,
    AddReviewComponent,
    LoginUserComponent,
    SignupComponent,
    LoginHomeComponent,
    HeaderWbtnComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
