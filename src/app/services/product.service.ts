import { Product } from '../models/product';

import { Injectable } from '@angular/core';
import uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productMap = {};

  constructor() {
    const p1 = new Product(uuid(),
      'product1', 'cat1', ' product 1 desc',
      40.97
    );
    this.save(p1);

    const p2 = new Product(uuid(),
      'product2', 'cat2', ' product 2 desc',
      50.97
    );
    this.save(p2);

    const p3 = new Product(uuid(),
      'product3', 'cat3', ' product 3 desc',
      60.97
    );
    this.save(p3);
  }

  // combination of save and update (if id is null create a new product)
  public save(product: Product): Product {
    this.productMap[product.id] = product;
    return product;
  }

  public delete(id: string): void {
    delete this.productMap[id];
  }

  public findAll(): Array<Product> {
    return Object.values(this.productMap);
  }

  public findById(id: string): Product {
    return this.productMap[id];
  }
}
