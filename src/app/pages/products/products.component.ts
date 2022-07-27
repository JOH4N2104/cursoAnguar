import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { product } from './interface/product.interface';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 
})

export class ProductsComponent implements OnInit {
  products!: product[];


  constructor(private productSvc: ProductService, private shoppinCartSvc: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.productSvc.getProducts().pipe(tap(res => this.products = res)).subscribe();



  }


  addToCart(product: product) {
    console.log('se adiciono al carrito ', product)
    this.shoppinCartSvc.updateCart(product)

  }




}
