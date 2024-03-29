import { Location, TitleCasePipe } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VideoComponent } from '../../video/video.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../common/service/chat-service.service';
import { ApiService } from '../../common/api-service/api-service.service';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, AvatarModule, MatToolbarModule, TitleCasePipe, MatChipsModule, MatListModule, FormsModule, MatDialogModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
  RoomId:any;
  currentUser:any;
  toUser:any;
  toUserId:any;
  messages: Array<any> = [];
  apiService = inject(ApiService);
  constructor(
    public location: Location,
    public dialog: MatDialog,
    private router: Router,
    private chatService: ChatService,
    private activateRoute: ActivatedRoute,
  ) {
    activateRoute.paramMap.subscribe((param: any)=>{
      this.toUserId = param.params.toUserId;
      this.RoomId = param.params.id;
    })
    this.currentUser = this.apiService.getLocalUser();
    this.apiService.getRoomMessageList(this.RoomId).subscribe((res:any)=>{
      this.messages =res
    });
    this.apiService.findUserProfile(this.toUserId).subscribe((res:any)=>{
      this.toUser =res.data;
      console.log(this.toUser);

    })
   }
  inputValue: any = '';

  openCamera() {
    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.router.navigate(['camara'])
        })
        .catch(error => {
          console.error('Error accessing the camera:', error);
        });
    } else {
      console.error('getUserMedia is not supported');
    }
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message: any) => {
      this.messages.push(message)
      console.log(message);
    });
  }
  ngOnDestroy(){
    this.apiService.GetAllRoom(this.apiService.getLocalUser()._id);
    this.chatService.leaveRoom(this.RoomId);
  }
  sendMessage() {
    this.chatService.sendMessage(this.inputValue,this.RoomId,this.apiService.getLocalUser()._id);
    this.inputValue = '';
  }
}
