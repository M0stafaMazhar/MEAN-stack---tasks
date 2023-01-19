import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
profile : any
errorMessage = ""
errorFlag = false


constructor(private global:GlobalService){}   



ngOnInit():void{
  this.global.profile().subscribe((data)=>{
    console.log(data);
    this.profile = data.data
  },(err)=>{
    this.errorFlag = true;
    this.errorMessage = err.error.message
  })}
}