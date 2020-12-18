import { Component, OnInit, Input } from '@angular/core';
import { JsonData } from 'src/Interfaces/apidata';

@Component({
  selector: 'app-row-data',
  templateUrl: './row-data.component.html',
  styleUrls: ['./row-data.component.css']
})
export class RowDataComponent implements OnInit {
 @Input() state_data:JsonData;
 
  constructor() { }

  ngOnInit(): void {
  }

}
