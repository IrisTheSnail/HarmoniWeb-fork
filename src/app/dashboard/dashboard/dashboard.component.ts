import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { User, users } from 'users';
import { AuthService } from 'src/app/controller/services/auth.service.ts.service';
import { MusicService } from 'src/app/controller/services/music.service'
import { ImageInsertComponent } from '../image-insert/image-insert.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  //user: User | undefined;
  @Input() currentusername = this.authService.current;
  public image:string|null;

  playlist:NgForm;

  playlists :String[]= ["Mocklist"];

  constructor(private route: ActivatedRoute, public authService: AuthService,
    public musicService : MusicService) {
      const usar = this.currentusername;
      this.image = localStorage.getItem("imgData");
      console.log(this.image);
    }

  ngOnInit() {
    // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = String(routeParams.get('username'));

    // // Find the product that correspond with the id provided in route.
    // this.user = users.find(user => user.username === productIdFromRoute);
  }

  search(){

    this.musicService.searchSong("love");
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
}
