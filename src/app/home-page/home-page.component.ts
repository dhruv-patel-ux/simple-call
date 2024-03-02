import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
 

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink, MatMenuModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
