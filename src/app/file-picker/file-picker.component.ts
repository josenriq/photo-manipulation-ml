import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent {

  @Input() accept: string = 'image/*';
  @Output() onFileSelected = new EventEmitter();
  @ViewChild('file') fileInput: ElementRef;

  open() {
    this.fileInput.nativeElement.click();
  }

  notifyFileSelected() {
    const file = this.fileInput.nativeElement.files[0];
    this.onFileSelected.emit(file);
  }

}
