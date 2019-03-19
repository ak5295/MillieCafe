import { ProductService } from '../../services/product.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  model: any = {};

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.model.products = this.productService.findAll();
  }

  get diagnostics() {
    return JSON.stringify(this.model);
  }
}
