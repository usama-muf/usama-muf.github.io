import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { RatingAndReviewsService } from 'src/app/Services/rating-and-reviews.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/Services/sharing.service';
import { observable, Observable } from 'rxjs';
import { Product } from 'src/Product';



@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  providers: [NgbModalConfig, NgbModal],

  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  products: any = [];
  rating: any = 'Be the first One to add a review';
  reviews: any = [];
  reviewModal: any = '';
  sProductCode: any = '';
  sProductName: any = '';
  sProductBrand: any = '';
  errorMsg: string = '';

  @Output() redirect: EventEmitter<any> = new EventEmitter();

  constructor(private productService: ProductService,
    private rrService: RatingAndReviewsService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router,
    private sharingService: SharingService) {


    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
    this.productService.getProductData().subscribe(res => {
      this.products = res;
    });
  }

  getReviews(productCode: string) {
    this.rrService.getProductRating(productCode)
      .subscribe({
        next: data => {
          this.rating = data; console.log(data)
        },
        error: error => console.log(error)
      });

    this.rrService.getProductReview(productCode)
      .subscribe({
        next: data => {
          this.reviews = data; console.log(data)
        },
        error: error => console.log(error)
      });

    // console.log(productCode);
  }

  addReview(productCode: string) {
    // console.log(productCode);

    this.sharingService.setProductCode(productCode);
    this.router.navigate(['add_review']);
  }

  open(content: any, porductCode: string) {
    this.getReviews(porductCode);
    this.modalService.open(content);
  }

  searchProduct(): void {
    // console.log( this.sProductCode, this.sProductName ,this.sProductBrand)
    this.errorMsg = '';

    // return this.productService.searchProduct(this.sProductCode, this.sProductName, this.sProductBrand).map()


    this.productService.searchProduct(this.sProductCode, this.sProductName, this.sProductBrand).subscribe({
      next: data => {
        this.products = data;
        return true;
      },
      error: error => {
        this.errorMsg = "OOPs No record Found";
        this.products = [];
        console.log("no record found for searched elements");
        console.log(error);
      }
    });
  }

}


