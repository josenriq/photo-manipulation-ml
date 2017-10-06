import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetworkService } from './network/network.service';
import { CanvasComponent } from './canvas/canvas.component';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    FilePickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NetworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
