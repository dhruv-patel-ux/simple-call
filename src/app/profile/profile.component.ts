import { Component, signal } from '@angular/core';
import {Location} from '@angular/common'
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,MatIconModule, MatInputModule, MatDividerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
name = signal('Dhruv');
constructor(
  public location: Location,
  private router: Router
){}
edit_profile(src: any){
  console.log(src);
  this.router.navigate(['profile/1'])
}
}
