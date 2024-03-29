import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL ='http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable <any>{
    return this.http.get<product[]>(this.apiURL)
  }
}
