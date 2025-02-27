import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {
  private products: any[] = [];

  addProduct(product: any) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
