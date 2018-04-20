import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styles: []
})
export class FilesComponent implements OnInit {

  Files

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageFiles(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => this.Files = data)
  }
}
