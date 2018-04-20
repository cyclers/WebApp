import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-datemilestones',
  templateUrl: './datemilestones.component.html',
  styles: []
})
export class DatemilestonesComponent implements OnInit {

  DateMilestones : DateMilestones

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageDateMilestones(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/DateMilestones/' + id)
      .subscribe(data => this.DateMilestones = data)
  }
}


export interface DateMilestones{
"DateID" : any
"DateType" : any
}