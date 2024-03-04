import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = "http://localhost:3000/api/v1"
  constructor(
    private http : HttpClient
  ) { }
  signup(data:any): Observable<any>{
    return this.http.post(`${this.base_url}/users/sign-up`,data)
  }
  
  login(data:any): Observable<any>{
    return this.http.post(`${this.base_url}/auth/login`,data)
  }
}
