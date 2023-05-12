import { Injectable, Input } from '@angular/core';
import { AuthService } from './auth.service.ts.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  @Input() touken = this.authService.getToken();

  endpoint: String = 'http://localhost:9000/';
  constructor(public authService: AuthService) { }

  searchSong(query:String){
    console.log("aaaa");

    const config = {
      headers : {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.touken,
      }
    };
    axios.get(this.endpoint + 'search/byName?q=' + query + '&limit=20', config )
    .then(response => {
      console.log("aaaa");
      console.log(response);
      console.log("aaaa");
    }).catch((error) => {
      console.error(error);
    });

  }

}

//get('https://www.example.com/search', { params: { q: 'axios', page: 2 } })
//http://localhost:9000/search/byName?q=query&limit=20
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//JSON.parse()
