import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- se agrega CommonModule
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true, 
  imports: [RouterLink, CommonModule], // <-- se incluye CommonModule aquí
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // Always allow access to admin
  isAdmin: boolean = true;
  isCartModalOpen: boolean = false;
  cartItems: any[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  
  openCartModal() {
    this.cartService.getItems().subscribe(items => {
      this.cartItems = items;
    });
    console.log('Cart Items:', this.cartItems); // Debug: muestra los items en consola
    this.isCartModalOpen = true;
  }

  closeCartModal() {
    this.isCartModalOpen = false;
  }
}
