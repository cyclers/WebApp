import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styles: []
})
export class FilesComponent implements OnInit {

  Files:File

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageFiles(id) {
    this.pdmService.loadStaffRecord(id + '/Attachments/')
      .subscribe(data => this.Files = _.last(data))
  }
}

export interface File {
  "Picture": any
  "DocumentID": any
  "DocumentTitle": any
  "AttachmentType": any
  "File": any
}