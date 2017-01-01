import { Component, Input, OnInit } from '@angular/core';
import { STATE } from '../utils/enums';
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
    

  }

  toggle() {
    if (!(this.item.state == STATE.Pending || this.item.state == STATE.Running))
      this.areaExpanded = !this.areaExpanded;
  }

  ngOnInit() {

    this.getListDisplayInfo(this.item.state);
  }

  getListDisplayInfo(stateInfo: STATE) {
      
      this.listDisplayInfo = new ListDisplayInfo();
      
    switch (stateInfo) {
      case STATE.Pending:
        this.mapPendingInfo();
        break;
      case STATE.Running:
        this.mapRunningInfo();
        break;
      case STATE.Complete:
        this.mapCompleteInfo();
        break;
      case STATE.Accepted:
        this.mapAcceptedInfo();
        break;
      case STATE.Rejected:
        this.mapRejectedInfo();
        break;

    }
  }

  mapRunningInfo() {
    this.listDisplayInfo.metricsColor = "LightSkyBlue";
    this.listDisplayInfo.unitTestColor = "#C0C0C0";
    this.listDisplayInfo.buildColor = "#C0C0C0";
    this.listDisplayInfo.functionalTestColor = "#C0C0C0";
    this.listDisplayInfo.panelColorClass = "panel-info"
    this.listDisplayInfo.stateString = "Running";
  }

  mapPendingInfo() {
    this.listDisplayInfo.metricsColor = "#C0C0C0";
    this.listDisplayInfo.unitTestColor = "#C0C0C0";
    this.listDisplayInfo.buildColor = "#C0C0C0";
    this.listDisplayInfo.functionalTestColor = "#C0C0C0";
    this.listDisplayInfo.panelColorClass = "panel-default";
    this.listDisplayInfo.stateString = "Pending";
  }
  mapAcceptedInfo() {
    this.listDisplayInfo.metricsColor = "green";
    this.listDisplayInfo.unitTestColor = "green";
    this.listDisplayInfo.buildColor = "green";
    this.listDisplayInfo.functionalTestColor = "green";
    this.listDisplayInfo.panelColorClass = "panel-success"
    this.listDisplayInfo.stateString = "Accepted";
    this.listDisplayInfo.showAcceptedResult=true;

  }
  mapRejectedInfo() {
    this.listDisplayInfo.metricsColor = "red";
    this.listDisplayInfo.unitTestColor = "#C0C0C0";
    this.listDisplayInfo.buildColor = "#C0C0C0";
    this.listDisplayInfo.functionalTestColor = "#C0C0C0";
    this.listDisplayInfo.panelColorClass = "panel-danger"
    this.listDisplayInfo.stateString = "Rejected";
    this.listDisplayInfo.showRejectedResult=true;
  }
  mapCompleteInfo() {
    this.listDisplayInfo.metricsColor = "green";
    this.listDisplayInfo.unitTestColor = "green";
    this.listDisplayInfo.buildColor = "green";
    this.listDisplayInfo.functionalTestColor = "green";
    this.listDisplayInfo.panelColorClass = "panel-success"
    this.listDisplayInfo.stateString = "Complete";
    this.listDisplayInfo.showCompleteResult=true;
  }
}
