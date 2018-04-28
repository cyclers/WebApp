import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  constructor(private http: HttpClient){

//  this.wawa()
  
  } 


  // wawa(): Observable<any>{
  //   console.log("12312333333333333")
  //   return this.http.post<any>('http://localhost:3000/browse', JSON.stringify(Khaled))
  // }
  }
  
// var Khaled = {
//   "id": 1120,
// }

// function commonheaders(){
//   const headers = new HttpHeaders();
//   headers.append('Content-Type', 'application/json; charset=utf-8');

//   return {headers};
// }
