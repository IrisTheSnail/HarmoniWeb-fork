import { Injectable, Input, Output } from '@angular/core';
import { AuthService } from './auth.service.ts.service';
import axios, { AxiosResponse } from 'axios';
import { Track } from '../models/track';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  @Input() touken = this.authService.getToken();
  endpoint: String = 'http://localhost:9000/';
  public responseBack:any ;

  constructor(public authService: AuthService) { }

  async searchSong(query:String){
    const config = {
      headers : {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.touken,
      }
    };
    // axios.get(this.endpoint + 'search/byName?q=' + query + '&limit=10', config )
    // .then(response => {

    //   this.responseBack = response;
    //   localStorage.setItem('searchParameters', JSON.stringify(response));
    // }).catch((error) => {
    //   console.error(error);
    // });

    const response = await axios.get(this.endpoint + 'search/byName?q=' + query + '&limit=10', config);
    this.responseBack = response;
  }


  public getResponseBack() : AxiosResponse<any, any> {
    waitForAsync(this.searchSong);
    console.log(this.responseBack);

    return this.responseBack;
  }


}

//get('https://www.example.com/search', { params: { q: 'axios', page: 2 } })
//http://localhost:9000/search/byName?q=query&limit=20
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

