import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, FormControlName, AbstractControl, NgForm } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../../shared/generic-validator';
import { PasswordMatcher } from '../../shared/password-matcher';
import { User, users } from 'users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register: FormGroup;
  user: any;

  constructor(private fb: FormBuilder) {
    // Define an instance of the validator for use with this form,
  }

  ngOnInit() {

  }

  registerFunc(register: any){
    console.log("shit getting serious", register);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(register.value.email.match(mailformat))){
      alert("You have entered an invalid email address!");
      register.reset();

    }else {//register it as a JSON
      this.user = {
        email : register.value.email,
        password : register.value.password,
        username : register.value.username,
      };

      users.push(this.user);

      // console.log(users);
      // console.log(users.find(element => element.username == "Iris"));
    }
  }
}
