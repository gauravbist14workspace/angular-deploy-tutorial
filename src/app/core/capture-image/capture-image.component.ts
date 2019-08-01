import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.css']
})
export class CaptureImageComponent implements OnInit {

  imageString: string;
  imageFile: any;

  constructor() { }

  ngOnInit() {
    this.imageFile = null;
    this.imageString = '';
  }

  getImage() {
    $('#imgBtn').click();
  }

  onChangeImage(event) {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);

      const that = this;
      fileReader.onload = function () {
        that.imageFile = fileReader.result;
        that.imageString = file.name;
      };
    }
  }
}
