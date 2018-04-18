import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BrowseVM } from '../pdm/components/browse/personnel-table/personnel-table.component';
import { PersonalVM } from '../pdm/pdm.vm';
import { Address } from '../pdm/components/maintain/infopages/address/address.component';

@Injectable()
export class PdmService {

  constructor(private http: Http) { 

          
  }
    
  loadUserData(): Observable<BrowseVM[]>{
   return this.http.get('https://5ad281c4df04690014938bea.mockapi.io/api/browse')
   .map(res => res.json());
    
  }

  LoadPersonal(suffix: string): Observable<PersonalVM>{
    return this.http.get('https://5ad281c4df04690014938bea.mockapi.io/api/' + suffix)
    .map(res => res.json());
     
   }

   LoadAddress(suffix: string): Observable<Address>{
    return this.http.get('https://5ad281c4df04690014938bea.mockapi.io/api/' + suffix)
    .map(res => res.json());
     
   }








   
}
