import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, FormControlName, AbstractControl, NgForm } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../../shared/generic-validator';
import { PasswordMatcher } from '../../shared/password-matcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define an instance of the validator for use with this form,
  }

  ngOnInit() {
    this.register = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: PasswordMatcher.match });
  }

  registerFunc(register: any){
    console.log("shit getting serious", register);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(register.value.email.match(mailformat))){
      alert("You have entered an invalid email address!");

    }
    //register is a JSON
  }
}

