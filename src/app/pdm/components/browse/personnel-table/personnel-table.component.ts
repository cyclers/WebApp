import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { PersonnelSidebarComponent } from '../personnel-sidebar/personnel-sidebar.component';
import { PdmService } from '../../../../services/pdm.service';


@Component({
  selector: 'app-personnel-table',
  templateUrl: './personnel-table.component.html',
  styles: []
})
export class PersonnelTableComponent implements OnInit {

  Persons: BrowseVM[]
  selectedRow: number

  @ViewChild(PersonnelSidebarComponent) private sidebar: PersonnelSidebarComponent
  
  constructor(private personService: PdmService) { }
    

  ngOnInit() {
    this.personService.loadUserData()
          .subscribe(allData => this.Persons = allData)
          
  }

  setClasses(rowNo: any){

    if(rowNo == 'toggle'){
      this.sidebar.openSidebar = !this.sidebar.openSidebar
    } else {
      this.sidebar.staff = this.Persons[rowNo -1]
    }}

}

export interface BrowseVM {
PersonnelID: any,
Name: string,
HiringDate: Date,
Division: string,
Department: string,
Title: string,
Costcenter: number,
BU: string,
EmploymentStatus: string,
EndDate: Date

}
