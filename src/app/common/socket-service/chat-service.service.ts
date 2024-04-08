import { Injectable, inject } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any
  private apiService = inject(ApiService)

  constructor() {
    let token = localStorage.getItem('ACCESS_TOKEN');
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

  sendMessage(message: any, roomId: any, userId: any, toUserId: any) {
    this.socket.emit('message', { message, roomId, userId, toUserId });
  }

  getMessages() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }
  getFriends() {
    this.socket.emit('friend-list', this.user._id);
    this.socket.on('friend-list', (friends: any) => {
      this.apiService.friendList.set(friends)
    })
  }
  user = this.apiService.getLocalUser();
  joinRoom(roomId: any) {
    this.socket.emit('joinRoom', { roomId, userId: this.user._id });
    return
  }
  leaveRoom(roomId: any) {
    this.socket.emit('leaveRoom', { roomId, userId: this.user._id });
  }
}

