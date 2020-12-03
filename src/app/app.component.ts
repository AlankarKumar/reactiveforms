import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { forbiddenNameValidator } from './form-validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder){}
  // userRegistration= new FormGroup({
  //   username: new FormControl('Enter Username here'),
  //   password: new FormControl('Enter password'),
  //   confirmPassword: new FormControl('Re enter your password'),
  //   address: new FormGroup({
  //     city: new FormControl('Enter your city'),
  //     state: new FormControl('Enter your state'),
  //     postalCode: new FormControl('Enter you post code')
  //   })
  // })

  get username(){
    return this.userRegistration.get('username')
  }

  userRegistration = this.formBuilder.group({
    username:['Enter Username',[Validators.required,Validators.minLength(5),forbiddenNameValidator]],
    password: ['Enter password'],
    confirmPassword:['Enter password'],
    address: this.formBuilder.group({
      city:['Enter city here'],
      state: ['Enter state'],
      postalCode: ['Enter post code']
    })
  })

  loadApi(){
    this.userRegistration.patchValue({
      username:'Test User',
      password:'test',
      confirmPassword: 'test'
    })
  }
}
