import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, FormControlName, AbstractControl, NgForm } from '@angular/forms';

import { User } from '../controller/services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register: FormGroup;
  //user: any;

  constructor(private fb: FormBuilder,private router:Router,private service:AuthenticationService) {
    // Define an instance of the validator for use with this form,
  }

  // ngOnInit() {

  // }

  // registerFunc(register: any){
  //   console.log("shit getting serious", register);
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(!(register.value.email.match(mailformat))){
  //     alert("You have entered an invalid email address!");
  //     register.reset();

  //   }else {//register it as a JSON
  //     this.user = {
  //       email : register.value.email,
  //       password : register.value.password,
  //       username : register.value.username,
  //     };

  //     users.push(this.user);

  //     console.log(users);
  //     console.log(users.find(element => element.username == "Iris"));
  //   }
  // }

  public user : User;
  ngOnInit(): void {
    this.user = new User();
  }
  retour() {
    this.router.navigate(['/demandes']);
  }

  save(user: any) {
    this.service.register(user).subscribe(res => {})
    this.user = new User();
    this.router.navigate(['/demandes']);
  }
}
