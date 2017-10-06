import { Component, ViewChild } from '@angular/core';
import { NetworkService } from './network/network.service';
import { CanvasComponent } from './canvas/canvas.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('canvasInput') canvasInput: CanvasComponent;
  @ViewChild('canvasOutput') canvasOutput: CanvasComponent;
  @ViewChild('canvasSource') canvasSource: CanvasComponent;
  @ViewChild('canvasResult') canvasResult: CanvasComponent;

  canvasWidth: number = 320;
  canvasHeight: number = 240;

  isTraining: boolean = false;
  error: number;
  iterations: number;
  rate: number;

  constructor(private network: NetworkService, private http: HttpClient) {
  }

  loadNetwork(file) {
    return new Promise(resolve => {
      const fileReader = new FileReader();
      fileReader.onload = event => {
        const fileUrl = event.target['result'];
        resolve(fileUrl);
      }
      fileReader.readAsDataURL(file);
    }).then((url: string) => {
      this.http.get(url).subscribe(data => {
        this.network.load(data);
      });
    });
  }

  train() {
    const data = this.getTrainingData();

    const that = this;
    const iterationCallback = function(data) {
      that.error = data.error;
      that.iterations = data.iterations;
      that.rate = data.rate;
      return !that.isTraining;
    };

    this.isTraining = true;
    this.network
      .train({ data, iterationCallback })
      .then(() => {
        this.isTraining = false;
        alert('Training done!');
      });
  }

  stopTraining() {
    this.isTraining = false;
  }

  getTrainingData() {
    const pixelsInput = this.canvasInput.getImageData().data;
    const pixelsOutput = this.canvasOutput.getImageData().data;

    const data = [];

    for (let x = 0; x < this.canvasWidth; x++) {
      for (let y = 0; y < this.canvasHeight; y++) {
        const input = [];
        const output = [];

        input.push(...this.getPixel(pixelsInput, x - 1, y - 1));
        input.push(...this.getPixel(pixelsInput, x + 0, y - 1));
        input.push(...this.getPixel(pixelsInput, x + 1, y - 1));
        input.push(...this.getPixel(pixelsInput, x - 1, y + 0));
        input.push(...this.getPixel(pixelsInput, x + 0, y + 0));
        input.push(...this.getPixel(pixelsInput, x + 1, y + 0));
        input.push(...this.getPixel(pixelsInput, x - 1, y + 1));
        input.push(...this.getPixel(pixelsInput, x + 0, y + 1));
        input.push(...this.getPixel(pixelsInput, x + 1, y + 1));

        output.push(...this.getPixel(pixelsOutput, x, y));

        data.push({ input, output });
      }
    }

    return data;
  }

  getPixel(pixelArray, x, y) {
    const PIXEL_SIZE = 4;
    const index = x + (y * this.canvasWidth);
    const pixels = pixelArray.slice(index, index + PIXEL_SIZE);
    if (pixels.length === PIXEL_SIZE) {
      return [
        pixels[0] / 255,
        pixels[1] / 255,
        pixels[2] / 255
      ];
    }
    return [0, 0, 0];
  }

  generate() {
    const sourceData = this.canvasSource.getImageData();
    const resultData = this.canvasResult.getImageData();

    for (let x = 0; x < this.canvasWidth; x++) {
      for (let y = 0; y < this.canvasHeight; y++) {
        const input = [];
        input.push(...this.getPixel(sourceData.data, x - 1, y - 1));
        input.push(...this.getPixel(sourceData.data, x + 0, y - 1));
        input.push(...this.getPixel(sourceData.data, x + 1, y - 1));
        input.push(...this.getPixel(sourceData.data, x - 1, y + 0));
        input.push(...this.getPixel(sourceData.data, x + 0, y + 0));
        input.push(...this.getPixel(sourceData.data, x + 1, y + 0));
        input.push(...this.getPixel(sourceData.data, x - 1, y + 1));
        input.push(...this.getPixel(sourceData.data, x + 0, y + 1));
        input.push(...this.getPixel(sourceData.data, x + 1, y + 1));

        const output = this.network.activate(input);

        const index = x + (y * this.canvasWidth);
        resultData.data[index + 0] = output[0] * 255;
        resultData.data[index + 1] = output[1] * 255;
        resultData.data[index + 2] = output[2] * 255;
      }
    }

    this.canvasResult.putImageData(resultData);
  }

}
