import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
txt = "hello world"

text = "goodbye"


handleClick(){
  this.text = "ohayo sekai"
}

handleInput(event:any){
  this.txt = event.target.value
}

handleInput2(event:any){
  console.log(event.target.value);
  
}

delete(i:any){

}

edit(i:any){

}

}
