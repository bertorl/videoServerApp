import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  @Output()
  sidenavEmitter = new EventEmitter<any>();

  @Output()
  notificationEmitter = new EventEmitter<any>();

  @Output()
  settingsEmitter = new EventEmitter<any>();

  @Output()
  search = new EventEmitter<string>();

  @Input()
  appearance = 'legacy';

  @Input()
  searchValue: string;

  ngOnInit(): void {
  }

  onChangeSearch(event) {
    this.search.emit(event.target.value);
  }

  onSidenavClick() {
    this.sidenavEmitter.emit();
  }

  onNotificationClick() {
    this.notificationEmitter.emit();
  }

  onSettingsClick() {
    this.settingsEmitter.emit();
  }

}
