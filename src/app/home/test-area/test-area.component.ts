import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
import { Chart } from 'chart.js';

import { PdmService } from '../../services/pdm.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent  {
  // chart = []; 
  // weatherDates = []
  // temp_max
  // temp_min
  // alldates


  constructor(private pdmservice: PdmService, private _http: HttpClient) {

   }

   ngOnInit() {
    console.log("ooooooooooooo")
    this.callData().
    subscribe(result => {
      console.log("xxxxxxxxxxxxxxxxxx", result)
    }) 

   }
   callData(): Observable<any> {

    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
  }
   
}



    
    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: this.weatherDates,
    //     datasets: [
    //       { 
    //         data: this.temp_max,
    //         borderColor: "#3cba9f",
    //         fill: false
    //       },
    //       { 
    //         data: this.temp_min,
    //         borderColor: "#ffcc00",
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });






//     .subscribe(res => {
//       debugger
//       console.log("wwwwwwwwww")
// //       this.temp_max = res['list'].map(res => res.main.temp_max);
// //       this.temp_min = res['list'].map(res => res.main.temp_min);
// //       let alldates = res['list'].map(res => res.dt)
      

// //       alldates.forEach((res) => {
// //       let jsdate = new Date(res * 1000)
// //       this.weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
// // })

//     })