import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://192.168.1.141:80/cart';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  removeItem(referenceNumber: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${referenceNumber}`);
  }

  clearCart(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
}
