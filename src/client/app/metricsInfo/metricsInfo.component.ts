import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'metricsInfo',
  templateUrl: 'metricsInfo.component.html',
  styleUrls: ['metricsInfo.component.css']//,
 // directives: [GoogleChart]
})

export class MetricsInfoComponent {
  @Input() metricsInfo: any;


  constructor(){

  var a=this.metricsInfo;
  }
 }
