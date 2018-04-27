import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasicReportComponent } from './Reports/basic-report/basic-report.component';
import {ReportService} from './ReportService/report.service';
import { BasicReport } from './ReportService/basicReport';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicReportComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
