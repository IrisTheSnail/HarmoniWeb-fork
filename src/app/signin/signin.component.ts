import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  Sign: FormGroup;
  amhere: boolean = true;
  isUnchanged:boolean = true;

  constructor( private fb: FormBuilder){}

  ngOnInit() {
    this.Sign = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      // email: '',
      // password: ''
    })

    //this.Sign.valueChanges.subscribe(console.log);

  }

  submitHandler(Sign: any){
    //this.loading = true;
    console.log("button owkrs");
    const formValue = this.Sign.value;
    console.log(formValue);

    try{
      //just to learn :
      //await this.afs.collection('contacts').add(formValue);
      //ila tra chi blan f l backend
    }catch(err){

    }

  }

}
