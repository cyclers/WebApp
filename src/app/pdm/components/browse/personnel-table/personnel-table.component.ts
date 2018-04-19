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
  this.getData()
  }

  getData():void{
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
Name: any,
HiringDate: any,
Division: any,
Department: any,
Title: any,
Costcenter: any,
BU: any,
EmploymentStatus: any,
EndDate: any

}
