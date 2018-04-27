import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BrowseVM } from '../pdm/components/browse/personnel-table/personnel-table.component';
import { PersonalVM } from '../pdm/pdm.vm';
import { Address } from '../pdm/components/maintain/infopages/address/address.component';
import {Headers, RequestOptions} from "@angular/http";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { General } from '../pdm/components/maintain/infopages/generalinfo/generalinfo.component';
import { Actions } from '../pdm/components/maintain/infopages/actions/actions.component';


@Injectable()
export class PdmService {
 

  constructor(private http: HttpClient) { }
    
  loadUserData(): Observable<BrowseVM[]>{
   return this.http.get<BrowseVM[]>('https://5ad281c4df04690014938bea.mockapi.io/api/browse')
    }


    loadTarekData(): Observable<any[]>{
      return this.http.get<any[]>('http://localhost:3000/actions')
      
       }

  loadStaffRecord(suffix: string): Observable<any>{
    return this.http.get<any>('https://5ad281c4df04690014938bea.mockapi.io/api/' + suffix)
 
   }

   postNewPersonnelAction(data){
    //  debugger
     console.log("be5 2", data)
  //    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  // const options = new RequestOptions({ headers: headers });
  // const params = new URLSearchParams();
  // params.append('mypostField', 'myFieldValue');

  
   this.http.post<General>('https://5ad281c4df04690014938bea.mockapi.io/api/Khaled', JSON.stringify(data)).subscribe();
   }

  
  //  http://5ae3691934b5970014d2ee0e.mockapi.io/personal

  getNew(): Observable<any>{
  return  this.http.get<any>("http://5ae3691934b5970014d2ee0e.mockapi.io/personal")
  }
   

  putNew(data){
    this.http.put("http://5ae3691934b5970014d2ee0e.mockapi.io/personal/1", data).subscribe()
    }

    postNew(data2){
this.http.post("http://5ae3691934b5970014d2ee0e.mockapi.io/personal",data2).subscribe()
    }
} 
