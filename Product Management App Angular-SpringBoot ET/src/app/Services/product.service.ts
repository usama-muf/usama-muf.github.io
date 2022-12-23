import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Product } from 'src/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:8090/api/v1";

  url = "http://localhost:8090/api/v1/products";
  returnCode: any = '';

  constructor(private HttpClient: HttpClient) { }


  getProductData() {
    return this.HttpClient.get(this.url);
  }

  searchProduct(productCode:string, productName:string, productBrand:string) {
    return this.HttpClient
    .get<Product[]>(this.url+'/search?productCode='+productCode+'&productName='+productName+'&productBrand='+productBrand)
    .pipe(
      catchError((err) => {
        console.log('error caught in product service')
        console.error(err);

        //Handle the error here

        return err;    //Rethrow it back to component
      }));

  }

  registerProductData(product: Product) {
    this.HttpClient.post(this.url, product)
      .subscribe(
        {
          next: data => {
            console.log(data);
            return data;
           
          },
          error: error => {
            console.error(error);
            return 500;
          }
        }
      );
  }


}
