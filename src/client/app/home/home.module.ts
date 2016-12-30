import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent, HomeRoutes } from './index';
//import {Ng2GoogleChartModule} from 'ng2-googlechart';
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],//Ng2GoogleChartModule
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
})

export class HomeModule { }
