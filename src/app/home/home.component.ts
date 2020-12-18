import { Component, OnInit } from '@angular/core';
import { JsonData } from '../../Interfaces/apidata';
import { FatchDataService } from '../fatch-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  statelist;
  statevalue = '';
  state_data;


  constructor(private service: FatchDataService) { }

  ngOnInit(): void {
    this.service.getStatelist().subscribe(res => this.statelist = res);
    console.log(this.statelist);
  }

  changeState() {
    this.service.getStateData(2015, this.statevalue)
      .subscribe(res => { 
        let data = res;
        let temp = [
          {
            "name": "atleast_one_measure",
            "value": data.atleast_one_measure || 0.0
          },
          {
            "name": "immunization_measure",
            "value": data.immunization_measure || 0.0
          },
          {
            "name": "reportable_lab_results_measure",
            "value": data.reportable_lab_results_measure || 0.0
          },
          {
            "name": "registry_measure",
            "value": data.registry_measure || 0.0
          },
          {
            "name": "syndromic_surveillance_measure",
            "value": data.syndromic_surveillance_measure || 0.0
          },

        ];
        this.state_data = temp;
      }
      );
  }


}
