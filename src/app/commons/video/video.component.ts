import { Component, OnInit } from '@angular/core';
import * as dashjs from 'angular-dashjs-player/node_modules/dashjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
    var player = dashjs.MediaPlayer().create();
    player.initialize(document.querySelector("#videoPlayer"), url, true);
  }

}
