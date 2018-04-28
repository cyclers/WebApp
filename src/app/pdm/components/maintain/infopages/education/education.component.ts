import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

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
    this.pdmService.loadStaffRecord(id + '/Education/')
      .subscribe(data => this.education = _.last(data))
  }
}

interface Education {
  "id": any
  "Univeristy":any
  "Faculty": any
  "Country": any
  "EducationLevel": any
  "Major": any
  "GraduationYear": any
  "Masters": any
  "PhD": any
}
