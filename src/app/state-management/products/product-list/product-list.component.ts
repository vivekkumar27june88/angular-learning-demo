import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.action';
import { Product } from '../product.model';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [TestService]
})
export class ProductListComponent implements OnInit {
  products: any;
  displayCode = true;
  selectedProduct: any;

  constructor(
    private productService: ProductService,
    private store: Store<fromProduct.State>,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products || [];
      this.selectedProduct = products[0];
    });

    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe(showProductCode => {
      this.displayCode = showProductCode;
    });

    this.store
      .pipe(select(fromProduct.getCurrentProduct))
      .subscribe(currentProduct => (this.selectedProduct = currentProduct));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  selectProduct(selectedProduct: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(selectedProduct));
  }

  addNewProduct() {
    this.store.dispatch(new productActions.InitializeCurrentProduct({}));
  }
}
