import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'primeng/avatar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleCasePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ApiService } from '../common/api-service/api-service.service';
import { ChatService } from '../common/service/chat-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, AvatarModule, MatToolbarModule, TitleCasePipe, MatDividerModule, MatListModule, RouterLink, MatMenuModule, ReactiveFormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  searchInput = new FormControl()

  users: Array<any> = []
  stories: Array<any> = [
    // {
    //   id: 1,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'my status'
    // },
    // {
    //   id: 2,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // },
    // {
    //   id: 3,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // },
    // {
    //   id: 4,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // },
    // {
    //   id: 5,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // },
    // {
    //   id: 6,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // },
    // {
    //   id: 7,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // }
    // , {
    //   id: 8,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // },
    // {
    //   id: 9,
    //   src: '../../assets/avatars/dhruv_avatar.jpg',
    //   name: 'Dhruv'
    // }
  ];
  message: string | undefined;
  messages: string[] = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private chatService: ChatService
  ) {
    this.getLiveusers()

  }
  profile_img: any;
  ngOnInit() {
    this.apiService.profile_photo.subscribe((value: any) => {
      this.profile_img = value;
    });

    this.profile_img = this.apiService.getLocalImage()
    this.searchInput.valueChanges.pipe(
     debounceTime(300),
     distinctUntilChanged() 
    ).subscribe((value: any) => {
      this.GetAllUsers(value);

    })
  }
  goToRoom(id: any) {
    const localUser = this.apiService.getLocalUser()
    this.apiService.GetRoom([id,localUser._id]).subscribe((res:any)=>{
      console.log(res);
      const roomId = res.data.roomId;
      this.chatService.joinRoom(roomId);
      this.router.navigate([`chat-room/${roomId}`])
    })
  }
  getLiveusers() {
    this.chatService.getUsers().subscribe((user: any) => {
      // this.users = user
      
      // let loginUser = localStorage.getItem('USER')
      // loginUser = loginUser && JSON.parse(loginUser);

    })
  }
  GetAllUsers(value: any) {
    this.apiService.GetAllUsers(value).subscribe((users: any) => {
      console.log(users);
      this.users =users
    })
  }
  logout() {
    this.apiService.logout()
    this.router.navigate(['login'])
  }
}
