import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket:any
  constructor() {
    let token = localStorage.getItem('ACCESS_TOKEN');
    console.log(token);
    
    this.socket = io(`http://localhost:9999?authorization=${token}`,
      {
        transports: ['websocket'],
        extraHeaders: {
          Authorization: `Bearer ${token}`
        }
    });
  }

  getUsers(){
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('live-users', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  sendMessage(message: any) {
    this.socket.emit('ping', message);
  }

  getMessages() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('pong', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }
}

