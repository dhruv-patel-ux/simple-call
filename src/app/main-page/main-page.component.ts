import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AvatarModule } from 'primeng/avatar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleCasePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ApiService } from '../common/api-service/api-service.service';
import { ChatService } from '../common/socket-service/chat-service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, AvatarModule, MatToolbarModule, TitleCasePipe, MatDividerModule, MatListModule, RouterLink,RouterLinkActive, MatMenuModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  apiService = inject(ApiService);
  stories: Array<any> = [];
  message: string | undefined;
  messages: string[] = [];

  constructor(
    private router: Router,
  ) {
   
  }
  ngOnInit() {

    this.apiService.profile_photo.set(this.apiService.getLocalImage()) 

  }
  
  logout() {
    this.apiService.logout()
    this.router.navigate(['login'])
  }
}
