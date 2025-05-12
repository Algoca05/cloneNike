import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.1.141:3000'; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(nombre: string, email: string, password: string, isAdmin: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { nombre, email, password, isAdmin });
  }
}
