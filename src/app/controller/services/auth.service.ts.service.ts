import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:9000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: User) {
    const config = {
      headers : {
        'Content-Type':  'application/json',
        'Authorization': '',
      }
    };
    const data = JSON.stringify(user);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAaaaaaAAAAAAAAA\n");
    console.log(data);
    axios.post(this.endpoint + 'signup', data, config)
    .then((response) => {
      const token = response.data;
      console.log(this.getToken());
      localStorage.setItem('access_token', token);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  // Sign-in
  // signIn(user: User) {
  //   return this.http
  //     .post<any>(`${this.endpoint}authenticate`, user)
  //     .subscribe((res: String) => {
  //       localStorage.setItem('access_token', res);
  //       this.getUserProfile(user.username).subscribe((user) => {
  //         this.currentUser = user.username;
  //         this.router.navigate(['dashboard/' + res]);
  //       });
  //     });
  // }

  //Signin version 2
  signIn(user: User) {
    const config = {
      headers : {
        'Content-Type':  'application/json',
        'Authorization': '',
      }
    };
    const data = JSON.stringify(user);
    axios.post(this.endpoint + 'authenticate', data, config)
    .then((response) => {
      const token = response.data;
      console.log(this.getToken());
      localStorage.setItem('access_token', token);
      this.router.navigate(['/users']);
    })
    .catch((error) => {
      console.error(error);
    });

      // .subscribe((res: any) => {
      //   localStorage.setItem('access_token', res.token);
      //   // this.getUserProfile(res._id).subscribe((res) => {
      //   //   this.currentUser = res;
      //   //   this.router.navigate(['user-profile/' + res.msg._id]);
      //   // });
      // });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['signin']);
    }
  }
  // User profile
  // getUserProfile(id: any): Observable<any> {
  //   let api = `${this.endpoint}/user-profile/${id}`;
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res) => {
  //       return res || {};
  //     }),
  //     catchError(this.handleError)
  //   );
  // }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
