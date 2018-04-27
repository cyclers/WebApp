import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../ReportService/report.service';
import {BasicReport} from '../../ReportService/basicReport';
import {ReservedQuery} from '../../ReportService/ReservedQuery';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-basic-report',
  templateUrl: './basic-report.component.html',
  styleUrls: ['./basic-report.component.css']
})
export class BasicReportComponent implements OnInit {
  basicData : BasicReport[];
  reservedQuery : ReservedQuery[];
 
  constructor( private _http: Http , private reportServ: ReportService)
   {
     reportServ.getBasicReport().subscribe(data => {this.basicData = data } );
     reportServ.getReservedQuery().subscribe(data => this.reservedQuery = data);
    }

  ngOnInit() {
  }

}
