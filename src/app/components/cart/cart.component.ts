import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.cartService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  removeItem(referenceNumber: string) {
    this.cartService.removeItem(referenceNumber).subscribe(() => {
      this.loadItems();
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.items = [];
    });
  }
}
