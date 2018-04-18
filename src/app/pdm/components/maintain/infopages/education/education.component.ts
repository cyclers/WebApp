import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styles: []
})
export class EducationComponent implements OnInit {

  Education

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageEducation(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.Education = data
        console.log(data)
      })
  }
}

