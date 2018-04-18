import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styles: []
})
export class AwardsComponent implements OnInit {
  Awards

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }

  loadInfoPageAwards(id){
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
    .subscribe(data => {this.Awards = data
    console.log(data)
    })
    }
    
}
