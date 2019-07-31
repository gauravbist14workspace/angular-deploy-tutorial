import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-corosal',
  templateUrl: './corosal.component.html',
  styleUrls: ['./corosal.component.css']
})
export class CorosalComponent implements OnInit {

  selectedImageIndex: number;
  imgs: any[];

  constructor() {
  }

  ngOnInit() {
    this.imgs = environment.pic_urls;
    this.selectedImageIndex = 0;
  }

  nextPic() {
    if (this.selectedImageIndex === this.imgs.length - 1) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  prevPic() {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.imgs.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }

}
