import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(referenceNumber: string) {
    this.items = this.items.filter(item => item.referenceNumber !== referenceNumber);
  }

  clearCart() {
    this.items = [];
  }
}
