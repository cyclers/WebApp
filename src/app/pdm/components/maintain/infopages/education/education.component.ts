import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styles: []
})
export class EducationComponent implements OnInit {

  education : Education

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageEducation(id:number) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Education/' + id)
      .subscribe(data => this.education = data)
  }
}

export interface Education {
  "id": any
  "Univeristy":any
  "Faculty": any
  "Country": any
  "educationLevel": any
  "Major": any
  "graduationYear": any
  "Masters": any
  "PhD": any
}
