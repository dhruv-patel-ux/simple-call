import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = "http://localhost:9999/api/v1";
  profile_photo = new BehaviorSubject<any>('')
  constructor(
    private http : HttpClient
  ) { }
  signup(data:any): Observable<any>{
    return this.http.post(`${this.base_url}/users/sign-up`,data)
  }

  login(data:any): Observable<any>{
    return this.http.post(`${this.base_url}/auth/login`,data)
  }

  updateProfile(data:any){
    return this.http.patch(`${this.base_url}/users/update-profile-photo`,data)
  }
}
