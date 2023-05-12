import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Song, playlist } from 'playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {

  @Input() playlistCurrent = playlist;
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

    this.playlistCurrent.push(this.song);
    console.log(playlist);
    this.displayStyle = "none";

  }
}
