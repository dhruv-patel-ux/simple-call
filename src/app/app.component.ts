import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,LoginComponent,SignUpPageComponent,MainPageComponent,ChatRoomComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-call';
}
