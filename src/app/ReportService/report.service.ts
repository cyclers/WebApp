import { Injectable } from '@angular/core';
import {BasicReport} from './basicReport';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {

  constructor(private _http : Http) {}

  getBasicReport(){   
    return this._http.get("http://5ad91696dc1baa0014c60cef.mockapi.io/api/BasicReport")
     .map(res=>res.json());
   }

   getReservedQuery(){
    return this._http.get("http://5ad91696dc1baa0014c60cef.mockapi.io/api/ReservedQuery")
    .map(res=>res.json());
   }
}
