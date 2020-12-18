import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from '../interfaces/apidata';

@Injectable({
  providedIn: 'root'
})
export class FatchDataService {

  constructor(private http: HttpClient) { }

  statelist = new Set()

  getStatelist(): any {
    return this.http.get<string[]>('https://localhost:44384/api/apidatafatch/getstatelist')
  }


  getStateData(year, state) {
    return this.http.get<JsonData>('https://localhost:44384/api/apidatafatch/getstatedata?year=' + year + "&state=" + state + "")
  }
}
