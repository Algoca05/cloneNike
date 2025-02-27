import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsService } from '../add-products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private addProductsService: AddProductsService) {}

  ngOnInit() {
    this.products = this.addProductsService.getProducts();
  }
}
