import { Location, TitleCasePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AvatarModule } from 'primeng/avatar';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { VideoComponent } from '../video/video.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, AvatarModule, MatToolbarModule, TitleCasePipe,MatChipsModule,MatListModule, FormsModule, MatDialogModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
  messageArr = [
    {
      message:"hi",
      type:'me'
    },
    {
      message:"hello",
      type:'other'
    },{
      message:"hi",
      type:'me'
    },{
      message:"hello",
      type:'other'
    },{
      message:"hi",
      type:'me'
    },{
      message:"hello",
      type:'other'
    },,{
      message:"hi",
      type:'me'
    },{
      message:"hello",
      type:'other'
    },,{
      message:"hi",
      type:'me'
    },{
      message:"hi",
      type:'me'
    },{
      message:"hello",
      type:'other'
    },
  ]
  constructor(
    public location: Location,
    public dialog: MatDialog,
    private router: Router
  ){}
  inputValue:any = '';
  ngOnInit():void{

  }

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
}
