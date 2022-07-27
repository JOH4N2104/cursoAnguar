import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails, Order } from '../interface/order.interface';
import { Store } from '../interface/store.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private ApiUrl = 'http://localhost:3000'
  constructor( private httpcli: HttpClient) { }

  getStores(): Observable<Store[]>{
    return this.httpcli.get<Store[]>(`${this.ApiUrl}/stores`);
  }

  saveOrder(order: Order): Observable<any>{
    return this.httpcli.post<any>(`${this.ApiUrl}/orders`,order)
  }
  saveDeailsOrder(details: OrderDetails): Observable<any>{
    return this.httpcli.post<any>(`${this.ApiUrl}/detailsOrders`,details)
  }
}
