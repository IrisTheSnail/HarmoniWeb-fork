import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router'; // CLI imports router
import { Song, playlist } from 'playlist';

import { AudioPlyerOptions } from 'src/app/dashboard/audioPlayer';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  playlist = playlist;
  current : Song | undefined = playlist[0];

  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  public changeSong(item : Song){
    this.current = item;
    // PlayerComponent.nextAudio();
  }
}
