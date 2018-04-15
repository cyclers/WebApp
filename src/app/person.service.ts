import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowseVM } from './pdm/components/browse/personnel-table/personnel-table.component';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  constructor(private http: Http) { 

          
  }
    
  loadUserData(): Observable<BrowseVM[]>{
   return this.http.get('https://5ad281c4df04690014938bea.mockapi.io/api/browse')
   .map(res => res.json());
    
  }
}
