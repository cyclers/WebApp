import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdm',
  templateUrl: './pdm.component.html',
  styles: [`
  .agile-list li {
    margin: 12px;
    padding: 20px;
    background: #FAFAFB;
    margin: 17px 29px 10px 0;
    padding: 37px;
    border-radius: 2px;
  `]
})
export class PdmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
