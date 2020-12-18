import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RowDataComponent } from './home/row-data/row-data.component';
import { ChartDataComponent } from './home/chart-data/chart-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RowDataComponent,
    ChartDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    NgxChartsModule,
    MatTableModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
