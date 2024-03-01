import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = "http://192.168.206.246:3000/api/v1"
  constructor() { }
  signup(data:any){
    
  }
}
