import { Component, OnInit, ViewChild } from '@angular/core';
import { DashjsPlayerComponent } from 'angular-dashjs-player';
import * as dashjs from 'angular-dashjs-player/node_modules/dashjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onSidenavClose() {

  }

}
