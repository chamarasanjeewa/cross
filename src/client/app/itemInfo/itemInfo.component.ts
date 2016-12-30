import { Component, Input,OnInit } from '@angular/core';
//import { STATE } from '../utils/enums';
import { ListDisplayInfo } from '../models/testInfoModel';
@Component({
  moduleId: module.id,
  selector: 'itemInfo',
  templateUrl: 'itemInfo.component.html',
  styleUrls: ['itemInfo.component.css']
})

export class ItemInfoComponent implements OnInit {
  @Input() item: any;
  areaExpanded: boolean = false;
  listDisplayInfo: ListDisplayInfo;
  constructor() {
    this.listDisplayInfo = new ListDisplayInfo();

  }

  toggle() {
    if (!(this.item.state == STATE.Pending || this.item.state == STATE.Running))
      this.areaExpanded = !this.areaExpanded;

  }

  ngOnInit() {

       this.getListDisplayInfo(this.item.state);
    }

  getListDisplayInfo(stateInfo: STATE) {
    switch (stateInfo) {
      case STATE.Pending:
        this.listDisplayInfo.metricsColor = "#C0C0C0";
        this.listDisplayInfo.unitTestColor = "#C0C0C0";
        this.listDisplayInfo.buildColor = "#C0C0C0";
        this.listDisplayInfo.functionalTestColor = "#C0C0C0";
        this.listDisplayInfo.panelColorClass = "panel-default";
       this.listDisplayInfo. stateString="Pending";
        break;
      case STATE.Running:
        this.listDisplayInfo.metricsColor = "blue";
        this.listDisplayInfo.unitTestColor = "#C0C0C0";
        this.listDisplayInfo.buildColor = "#C0C0C0";
        this.listDisplayInfo.functionalTestColor = "#C0C0C0";
        this.listDisplayInfo.panelColorClass = "panel-success"
        this.listDisplayInfo. stateString="Running";
        break;
      case STATE.Complete:
        this.listDisplayInfo.metricsColor = "green";
        this.listDisplayInfo.unitTestColor = "green";
        this.listDisplayInfo.buildColor = "green";
        this.listDisplayInfo.functionalTestColor = "green";
        this.listDisplayInfo.panelColorClass = "panel-success"
        this.listDisplayInfo. stateString="Complete";
        break;
      case STATE.Accepted:
        this.listDisplayInfo.metricsColor = "green";
        this.listDisplayInfo.unitTestColor = "green";
        this.listDisplayInfo.buildColor = "green";
        this.listDisplayInfo.functionalTestColor = "green";
        this.listDisplayInfo.panelColorClass = "panel-info"
        this.listDisplayInfo. stateString="Accepted";
        break;
      case STATE.Rejected:
        this.listDisplayInfo.metricsColor = "red";
        this.listDisplayInfo.unitTestColor = "#C0C0C0";
        this.listDisplayInfo.buildColor = "#C0C0C0";
        this.listDisplayInfo.functionalTestColor = "#C0C0C0";
        this.listDisplayInfo.panelColorClass = "panel-danger"
        this.listDisplayInfo. stateString="Rejected";
        break;

    }
    // {'panel-success': item.state==STATE.Complete,'panel-info': item.state==STATE.Accepted,'panel-danger': item.state==STATE.Rejected, 'panel-default': item.state==STATE.Running}
    // if (this.item.state == STATE.Running) {
    //   return "grey"
    // } else if (this.item.state == STATE.Pending) {
    //   return "blue"
    // } else if (this.item.state == STATE.Complete || this.item.state == STATE.Accepted) {
    //   return "green"
    // } else if (this.item.state == STATE.Rejected) {
    //   return "green"
    // }
    // return "";
  }

  getBuildsBackGroundColor() {

  }

  getUnitTestBackGroundColor() {

  }

  getFunctionaTestBackGroundColor() {

  }


}

export enum STATE {
  Accepted = 1,
  Rejected = 2,
  Pending = 3,
  Complete = 4,
  Running = 5
}
