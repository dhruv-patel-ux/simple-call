import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../../common/api-service/api-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-model',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatInputModule, MatDividerModule, MatButtonModule, MatDialogModule],
  templateUrl: './edit-model.component.html',
  styleUrl: './edit-model.component.scss'
})
export class EditModelComponent {
  @ViewChild('fileInput') fileInput: any;
  constructor(
    private apiService: ApiService,
    private activModel: MatDialog,
    private sanitizer: DomSanitizer
  ) { }

  openFilePicker() {
    // Programmatically trigger a click event on the file input element
    this.fileInput.nativeElement.click();
  }
  imageUrl: any = "";
  selectedFile!: File;
  onFileSelected(event: any) {
    // Handle the selected file
    const file: File = event.target.files[0];

    if (file) {
      // Create a FileReader object
      const reader = new FileReader();
      this.selectedFile = file;
      // Define a callback function to handle the file read operation
      reader.onload = (e) => {
        this.imageUrl = e.target?.result; // Set the URL of the selected image
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
    event = ''
  }
  updateProfile() {
    const formValue = new FormData();
    formValue.append('profile-photo', this.selectedFile);
    this.apiService.updateProfile(formValue).subscribe((res: any) => {
      console.log(res.url);
      
      localStorage.setItem('profile-image', `http://localhost:9999/public${res.url}`)
      this.apiService.profile_photo.set(`http://localhost:9999/public${res.url}`)
      this.activModel.closeAll();
    })
  }
  cancle() {
    this.imageUrl = ''
  }
}
