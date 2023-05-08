import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, FormControlName, AbstractControl, NgForm } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../../shared/generic-validator';
import { PasswordMatcher } from '../../shared/password-matcher';
import { User } from '../controller/services/user';
import { AuthService } from '../controller/services/auth.service.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register: FormGroup;
  user:any;

  constructor(private fb: FormBuilder,public authService: AuthService,
    public router: Router) {
    // Define an instance of the validator for use with this form,
  }

  ngOnInit() {

  }

  registerFunc(register: any){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!mailformat.test(register.value.email)){
      alert("email not valid!");
      return;
    }

  //register it as a JSON
    this.user = {
      password : register.value.password,
      username : register.value.username,
      email : register.value.email,
    };
    console.log(this.user);

    try{
      //just to learn :
      //await this.afs.collection('contacts').add(formValue);
      //ila tra chi blan f l backend
      this.authService.signUp(this.user);
    }catch(err){


    // console.log(users);
    // console.log(users.find(element => element.username == "Iris"));

    }
  }
}
