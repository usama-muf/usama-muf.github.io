import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminLoginGuard } from './Guards/admin-login.guard';
import { UserLoginGuard } from './Guards/user-login.guard';
import { HomeComponent } from './home/home.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginUserComponent } from './LoginSignup/login-user/login-user.component';
import { SignupComponent } from './LoginSignup/signup/signup.component';
import { RegisterProductComponent } from './Product/register-product/register-product.component';
import { SearchProductComponent } from './Product/search-product/search-product.component';
import { AddReviewComponent } from './Review/add-review/add-review.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginUserComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin_login', component:AdminLoginComponent},
  {path:'admin_home', component:AdminHomeComponent, canActivate:[AdminLoginGuard]},
  {path:'home_main', component:LoginHomeComponent, canActivate:[UserLoginGuard]},
  {path:'search_product', component:SearchProductComponent, canActivate:[UserLoginGuard]},
  {path:'register_product', component:RegisterProductComponent, canActivate:[UserLoginGuard]},
  {path:'add_review', component:AddReviewComponent, canActivate:[UserLoginGuard]},
  {path:'**', component:HomeComponent}
  // {path:'**', component:RegisterProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
