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

  getProductByReferenceNumber(referenceNumber: string) {
    return this.products.find(product => product.referenceNumber === referenceNumber);
  }

  updateProduct(updatedProduct: any) {
    const index = this.products.findIndex(product => product.referenceNumber === updatedProduct.referenceNumber);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
