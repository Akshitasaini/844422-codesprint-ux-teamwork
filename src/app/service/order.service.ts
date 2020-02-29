import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = "http://localhost:5000/api/v1/order"

  constructor(private http:HttpClient) { }

  getOrders():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }
}
