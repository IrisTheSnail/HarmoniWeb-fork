import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { User, users } from 'users';
import { AuthService } from 'src/app/controller/services/auth.service.ts.service';
import { MusicService } from 'src/app/controller/services/music.service'
import { ImageInsertComponent } from '../image-insert/image-insert.component';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AxiosResponse } from 'axios';
import { Track } from 'src/app/controller/models/track';

import { Song, playlist } from 'playlist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  //user: User | undefined;
  @Input() currentusername = this.authService.current;
  public image:string|null;

  searched:FormGroup;
  playlists :String[]= ["Mocklist"];
  responseTracks:AxiosResponse<any, any> ;
  flag: number = 0;

  constructor(private route: ActivatedRoute, public authService: AuthService,
    public musicService : MusicService) {
      const usar = this.currentusername;
      this.image = localStorage.getItem("imgData");
      console.log(this.image);

      this.searched = new FormGroup({
        searcheed: new FormControl()
      });
    }

  ngOnInit() {
    // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = String(routeParams.get('username'));

    // // Find the product that correspond with the id provided in route.
    // this.user = users.find(user => user.username === productIdFromRoute);
  }

  async search(searched:any){
    this.flag = 1;
    await this.musicService.searchSong(searched.value.searcheed);
    console.log(this.musicService.getResponseBack());
    this.responseTracks = this.musicService.getResponseBack().data;

  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup(add:any) {
    // this.song = {
    //   cover : '',
    //   length: '1:44',
    //   title : add.value.title,
    //   url : add.value.url

    // };

    // this.playlist.push(this.song);
    console.log(add.value);
    this.playlists.push(add.value.playlist);
    console.log(this.playlists);
    this.displayStyle = "none";

  }

  addSongtoList(name:any, uri:any, artist:any){
    var newSong:Track={
      name: name,
      uri: uri,
      artist: artist
    }
    return newSong;
  }

}
