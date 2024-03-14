import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'primeng/avatar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleCasePipe } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, AvatarModule, MatToolbarModule, TitleCasePipe, MatDividerModule, MatListModule, RouterLink, MatMenuModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  stories:Array<any> = [
    {
      id: 1,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'my status'
    },
    {
      id: 2,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    },
    {
      id: 3,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    },
    {
      id: 4,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    },
    {
      id: 5,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    },
    {
      id: 6,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    },
    {
      id: 7,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    }
    ,{
      id: 8,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    },
    {
      id: 9,
      src: '../../assets/avatars/dhruv_avatar.jpg',
      name:'Dhruv'
    }
  ];
  message: string | undefined;
  messages: string[] = [];

  constructor(
    private router: Router,
  ){}

  goToRoom(){
    this.router.navigate(['chat-room'])
  }

}
