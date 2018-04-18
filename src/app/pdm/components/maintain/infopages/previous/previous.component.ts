import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styles: []
})
export class PreviousComponent implements OnInit {

  PreviousEmployers

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPagePreviousEmployers(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.PreviousEmployers = data
        console.log(data)
      })
  }
}
