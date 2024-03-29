import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../common/api-service/api-service.service';
 

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink, MatMenuModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router){}
  ngOnInit():void{
    const ACCESS_TOKEN= localStorage.getItem('ACCESS_TOKEN');
    if(ACCESS_TOKEN) this.router.navigate(['/main']);
  }
}
