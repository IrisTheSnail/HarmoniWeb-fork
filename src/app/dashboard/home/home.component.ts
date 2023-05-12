import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router'; // CLI imports router
import { Song, playlist } from 'playlist';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AudioPlyerOptions } from 'src/app/dashboard/audioPlayer';
import { PlayerComponent } from '../player/player.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  playlist = playlist;
  current : Song | undefined = playlist[0];
  add: FormGroup;
  song : Song;


  constructor(private route: ActivatedRoute,  private fb: FormBuilder,) { }

  ngOnInit() {

  }

  public changeSong(item : Song){
    this.current = item;
    // PlayerComponent.nextAudio();
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup(add:any) {
    this.song = {
      cover : '',
      length: '1:44',
      title : add.value.title,
      url : add.value.url

    };

    this.playlist.push(this.song);
    console.log(playlist);
    this.displayStyle = "none";

  }

}
