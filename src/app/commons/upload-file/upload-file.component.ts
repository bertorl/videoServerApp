import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {NgClass, NgStyle} from '@angular/common';
import { FormControl } from '@angular/forms';
import { FileInput } from 'ngx-material-file-input';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],

})
export class UploadFileComponent implements OnInit {

  @Input()
  typeUpload: string;

  fileControl: FormControl = new FormControl();
  constructor() {
  }

  ngOnInit(): void {
  }

  getFile(): FileInput {
    return this.fileControl.value;
  }

}
