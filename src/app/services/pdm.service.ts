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
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import { Validity } from '../pdm/components/maintain/maintain.component';


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
    return this.http.get<any>('http://5ad91696dc1baa0014c60cef.mockapi.io/api/' + suffix)
          .do(data => {
            let infoHeader = {
              CreatedAt: data.CreatedAt,
              ValidFrom:  data.ValidFrom,
              ValidTo: data.ValidTo,
              LastChange: data.LastChange,
              By: data.By
            }
            this.InfoPageHeader.next(infoHeader)
          })
    

   }

   postMaintainChange(data){
      // console.log("be5 2", data)
      this.http.post<General>('http://5ad91696dc1baa0014c60cef.mockapi.io/api/Actions', data).subscribe();
   }

   InfoPageHeader = new Subject<Validity>();
   InfoPageNew = new Subject();
   InfoPageEdit = new Subject();
   InfoPageSave = new Subject();
   InfoPageForward = new Subject();
   InfoPageBackward = new Subject();
   

   InfoPageHeader$ = this.InfoPageHeader.asObservable();
   InfoPageNew$ = this.InfoPageHeader.asObservable();
   InfoPageEdit$ = this.InfoPageHeader.asObservable();
   InfoPageSave$ = this.InfoPageHeader.asObservable();
   InfoPageForward$ = this.InfoPageHeader.asObservable();
   InfoPageBackward$ = this.InfoPageHeader.asObservable();


} 
