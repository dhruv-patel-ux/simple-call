import { Component, signal } from '@angular/core';
import {Location} from '@angular/common'
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

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
  public location: Location
){}
}
