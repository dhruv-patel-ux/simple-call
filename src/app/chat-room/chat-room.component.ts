import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AvatarModule } from 'primeng/avatar';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, AvatarModule, MatToolbarModule, TitleCasePipe,MatChipsModule,MatListModule, FormsModule],
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
  inputValue:any = '';
  ngOnInit():void{

  }
}
