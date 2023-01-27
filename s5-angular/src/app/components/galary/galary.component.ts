import { Component } from '@angular/core';
import { GolbalService } from 'src/app/services/golbal.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent {
  galary: any
  loadingFlag = true

  constructor(private global:GolbalService){
    this.global.getGalery().subscribe((res)=>{
      this.galary = res
    } , ()=>{

    }, ()=>{
      this.loadingFlag = false
    }
    )
  }
}
