import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsService } from '../../services/add-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private addProductsService: AddProductsService, private router: Router) {}

  ngOnInit() {
    this.products = this.addProductsService.getProducts();
  }

  editProduct(referenceNumber: string) {
    this.router.navigate(['/form'], { queryParams: { referenceNumber } });
  }
}
