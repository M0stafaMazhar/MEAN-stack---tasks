import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitFlag = false;

  loginForm = new FormGroup({
    userName: new FormControl("" , [Validators.required]), 
    password: new FormControl("" , [Validators.required]),
  })

  
  get userData() {return this.loginForm.controls}


  handleSubmit(){
    this.submitFlag = true;
  }

}
