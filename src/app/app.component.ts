import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-proj';
  
  selectedImageIndex: number;
  imgs: any[];

  constructor() {
    this.imgs = [
      "https://www.w3schools.com/bootstrap/la.jpg",
      "https://www.w3schools.com/bootstrap/chicago.jpg",
      "https://www.w3schools.com/bootstrap/ny.jpg"
    ]

    this.selectedImageIndex = 0;
  }

  nextPic() {
    if (this.selectedImageIndex == this.imgs.length - 1) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  prevPic() {
    if (this.selectedImageIndex == 0) {
      this.selectedImageIndex = this.imgs.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }
}
