import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any
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

  getUsers() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('live-users', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  sendMessage(message: any, roomId: any,userId:any) {
    this.socket.emit('message',{message,roomId,userId});
  }

  getMessages() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('message', (data: any) => {
        console.log(data);
        
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }
  joinRoom(roomId: any) {
    this.socket.emit('joinRoom', roomId);
    return
  }
  leaveRoom(roomId: any) {
    this.socket.emit('leaveRoom', roomId);
  }
}

