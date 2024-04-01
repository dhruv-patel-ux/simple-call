import { Component, inject } from '@angular/core';
import { Location } from '@angular/common'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EditModelComponent } from './edit-model/edit-model.component';
import { ApiService } from '../../common/api-service/api-service.service';

@Component({
  selector: 'app-profile-photo-edit',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatInputModule, MatDividerModule, MatButtonModule],
  templateUrl: './profile-photo-edit.component.html',
  styleUrl: './profile-photo-edit.component.scss'
})
export class ProfilePhotoEditComponent {
  apiService = inject(ApiService)
  constructor(
    public location: Location,
    public dialog: MatDialog
  ) {
  }
  openEditModel() {
    this.dialog.open(EditModelComponent, {
      width: "100%",
      maxWidth: "none",
      position: { bottom: "0px" }
    })
  }
  ngOnInit() {
    const localImage = localStorage.getItem('profile-image')
    this.apiService.profile_photo.set(localImage)
  }
}
