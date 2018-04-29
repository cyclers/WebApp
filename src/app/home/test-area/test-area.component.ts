import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

// declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent  {


   constructor() { }
    canvas: any;
    ctx: any;
  
    ngAfterViewInit() {
      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ["Khaled", "In Progress", "On Hold"],
            datasets: [{
                label: '# of Khaleds',
                data: [2,1,1],
                backgroundColor: [
                    'rgba(162, 99, 132, 55)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
          
        }
      });
    }
  
  }