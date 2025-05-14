import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {
  private apiUrl = 'http://192.168.1.141:80/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${product.referenceNumber}`, product);
  }

  getProductByReferenceNumber(referenceNumber: string): Observable<any> {
    return this.http.get<any>(`/api/products/${referenceNumber}`);
  }

  // Para obtener un producto por referencia, se puede obtener la lista y filtrar en el componente
}
