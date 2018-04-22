import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import { PdmService } from '../../services/pdm.service';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent implements OnInit {

  constructor(private pdmservice: PdmService) { }
  apidata 
  title = "app";

  ngOnInit() {

   
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




  }


}
