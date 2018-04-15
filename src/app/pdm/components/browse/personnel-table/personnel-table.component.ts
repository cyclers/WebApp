import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { PersonService } from '../../../../person.service';

@Component({
  selector: 'app-personnel-table',
  templateUrl: './personnel-table.component.html',
  styles: []
})
export class PersonnelTableComponent implements OnInit {

  Persons: BrowseVM[]
  constructor(private personService: PersonService) { 

          
  }
    

  ngOnInit() {
    this.personService.loadUserData()
          .subscribe(allData => this.Persons = allData)
          
  }


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
