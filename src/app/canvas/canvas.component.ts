import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {

  @Input() width: number = 320;
  @Input() height: number = 240;

  @ViewChild('canvas') canvas: ElementRef;

  private getContext() {
    return this.canvas.nativeElement.getContext('2d');
  }

  public drawImageFromFile(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = event => this.drawImageFromUrl(event.target['result']);
    fileReader.readAsDataURL(file);
  }

  public drawImageFromUrl(imageUrl: string) {
    const image = new Image();
    image.onload = () => this.getContext().drawImage(image, 0, 0, this.width, this.height);
    image.src = imageUrl;
  }

  public getImageData() {
    return this.getContext().getImageData(0, 0, this.width, this.height);
  }

  public putImageData(data) {
    return this.getContext().putImageData(data, 0, 0);
  }

}
