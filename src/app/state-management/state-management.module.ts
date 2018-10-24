import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/services/product.service';
import { reducer } from './products/state/product.reducer';
import { StateManagementComponent } from './state-management/state-management.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StateManagementComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducer)
  ],
  declarations: [StateManagementComponent, ProductsComponent, ProductListComponent],
  providers: [ProductService]
})
export class StateManagementModule {}
