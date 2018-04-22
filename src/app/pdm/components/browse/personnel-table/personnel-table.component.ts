import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { PersonnelSidebarComponent } from '../personnel-sidebar/personnel-sidebar.component';
import { PdmService } from '../../../../services/pdm.service';
declare var jquery:any;
declare var $ :any;

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
      loadDatatableJQ()
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


function loadDatatableJQ(){
  $(document).ready(function(){
    $('.dataTables-example').DataTable({
        pageLength: 10,
        responsive: true,
        dom: '<"html5buttons"B>lTfgitp',
        buttons: [
            { extend: 'copy'},
            {extend: 'csv'},
            {extend: 'excel', title: 'ExampleFile'},
            {extend: 'pdf', title: 'ExampleFile'},

            {extend: 'print',
             customize: function (win){
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');

                    $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
            }
            }
        ]

    });

});
}