import { Product } from '../models/product';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // combination of save and update (if id is null create a new product)
  public save(product: Product) {

  }
}
