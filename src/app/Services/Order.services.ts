import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
    private baseUrl = 'https://example.com/api';
  
    constructor(private http: HttpClient) { }
  
    getUsers() {
      return this.http.get(`${this.baseUrl}/users`);
    }




    
}