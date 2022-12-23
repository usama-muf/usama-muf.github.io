import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/Product';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {

  product = new Product();
  returnCode: any = '';
  errorMsg = '';

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async postProductData() {
    this.productService.registerProductData(this.product);
  }

  registerProduct() {
    this.postProductData();
    this.router.navigate(['home_main']);
    // console.log(this.product);
  }


  validateData() {
    if ((this.product.productCode == undefined || this.product.productCode.length < 1) ||
      (this.product.productName == undefined || this.product.productName.length < 2) ||
      (this.product.productBrand == undefined || this.product.productBrand.length < 2)) {
      this.errorMsg = "Please Enter valid Details "
      return true;
    }
    return false;
  }
  

}
