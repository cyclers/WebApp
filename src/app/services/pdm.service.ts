import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BrowseVM } from '../pdm/components/browse/personnel-table/personnel-table.component';
import { PersonalVM } from '../pdm/pdm.vm';
import { Address } from '../pdm/components/maintain/infopages/address/address.component';
import {Headers} from "@angular/http";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { General } from '../pdm/components/maintain/infopages/generalinfo/generalinfo.component';
import { Actions } from '../pdm/components/maintain/infopages/actions/actions.component';

@Injectable()
export class PdmService {

  constructor(private http: HttpClient) { 

          
  }
    
  loadUserData(): Observable<BrowseVM[]>{
   return this.http.get<BrowseVM[]>('https://5ad281c4df04690014938bea.mockapi.io/api/browse')
  //  .map(res => res.json());
  // .subscribe(data => console.log('xxxxxxxkj', data))
    
  }

  loadStaffRecord(suffix: string): Observable<any>{
    return this.http.get<any>('https://5ad281c4df04690014938bea.mockapi.io/api/' + suffix)
    // .map(res => res.json());
     


 
   }



   commonHttpHeaders(suffix: number) {
    const headers = new Headers();
    // headers.append('USERID',suffix.toString());
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return {headers};
} 









   
}
