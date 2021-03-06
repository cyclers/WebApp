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
    return this.http.get<any>('http://5ae2f53f34b5970014d2ed70.mockapi.io/api/Staff/' + suffix)
 
   }

   postNewPersonnelAction(tblName, data){
     this.http.post('http://5ae2f53f34b5970014d2ed70.mockapi.io/api/Staff/' + tblName, data).subscribe();
   }


   putPersonnelChange(tblName, data){
    this.http.put('http://5ae2f53f34b5970014d2ed70.mockapi.io/api/Staff/' + tblName, data).subscribe();
  }
  
//amany
  getInfoPersonal(empcod:any):Observable<any>{
    return this.http.get<data>("http://5ae3691934b5970014d2ee0e.mockapi.io/personal/"+empcod);
  }
  
  getResons():Observable<any[]>{
   return this.http.get<any[]>("http://5ae3691934b5970014d2ee0e.mockapi.io/reasons")
  }

  postActions( id , value):Observable<any[]>{
    return  this.http.post<Actions[]>("http://5ae3691934b5970014d2ee0e.mockapi.io/personal/"+ id,value);
  }

  editAction(value, idCode):Observable<any[]>{
   return this.http.put<any>("http://5ae3691934b5970014d2ee0e.mockapi.io/personal/"+idCode+"/action/"+idCode,value)
  }
} 


export interface data {
  id: number,
    awardId: number,
    createdAt: number,
    name: string,
    imageUrl: string
}
