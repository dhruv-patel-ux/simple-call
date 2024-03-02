import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  @ViewChild('videoElement')
  videoElement!: ElementRef;
  @ViewChild('canvasElement')
  canvasElement!: ElementRef;

  private videoStream: MediaStream | undefined;
  constructor(
    public location: Location
  ){
    this.openCamera();
  }
  openCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.videoStream = stream;
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch(error => {
          console.error('Error accessing the camera:', error);
        });
    } else {
      console.error('getUserMedia is not supported');
    }
  }
  imageSrc = ''
  takePhoto() {
    if (this.videoStream) {
      const video = this.videoElement.nativeElement;
      const canvas = this.canvasElement.nativeElement;
      const context = canvas.getContext('2d');

      // Set canvas dimensions to match video stream
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current frame of the video onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas image to base64 data URL
      const imageData = canvas.toDataURL('image/png');
      this.imageSrc = imageData;
      // Do something with the captured image, such as display it or send it to a server
      console.log('Captured image:', imageData);
    }
  }
}
