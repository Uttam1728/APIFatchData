import { Component, Input, OnInit } from '@angular/core';
import { JsonData } from 'src/Interfaces/apidata';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent implements OnInit {
  @Input() state_data;

  constructor() {  }
  // options for the chart
  view: any[] = [400, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'X Axis';
  showYAxisLabel = true;
  yAxisLabel = 'Meausere';
  timeline = false;
  autoScale = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90']
  };

  ngOnInit(): void {
   
  }

}
