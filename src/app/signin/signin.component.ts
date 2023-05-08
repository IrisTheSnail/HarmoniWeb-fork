import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../controller/services/auth.service.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  Sign: FormGroup;
  amhere: boolean = true;
  isUnchanged:boolean = true;

  constructor( private fb: FormBuilder,public authService: AuthService,
    public router: Router){}

  ngOnInit() {
    this.Sign = this.fb.group({
      username: [''],
      password: ['']
      // email: '',
      // password: ''
    })

    //this.Sign.valueChanges.subscribe(console.log);

  }

  submitHandler(Sign: any){
    const formValue = this.Sign.value;
    console.log(formValue);

    try{
      //just to learn :
      //await this.afs.collection('contacts').add(formValue);
      //ila tra chi blan f l backend
      this.authService.signIn(this.Sign.value);
    }catch(err){

    }

  }

}
