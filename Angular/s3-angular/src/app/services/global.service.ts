import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {

   }

   login(obj : any):Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login` , obj)
   }

   profile():Observable<any> {
    return this.http.get(`${this.baseUrl}/user/myprofile`)
   }
}
