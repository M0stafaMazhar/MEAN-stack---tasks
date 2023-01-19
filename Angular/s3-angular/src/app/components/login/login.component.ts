import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Login } from 'src/app/interdaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

model:Login = {
  userName: '',
  password: '',
}

errorMessage = ""
errorFlag = false

constructor(private global:GlobalService){}
  handleSubmit(form : NgForm){
    if(form.valid){
      this.global.login(this.model).subscribe(res=>{
        localStorage.setItem('token', res.data.token)
      }, (e)=>{
        this.errorFlag = true;
        this.errorMessage = e.error.message;
      }, ()=>{

      })
    }
  }

}
