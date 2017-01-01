import {Injectable} from '@angular/core';

export class  TestInfoModel{
     name:string;
     owner:string;
     timeStarted:string;
     state:string;
     metrics:any;
     build:any;
     unitTest:any;
     type:string;
     functionalTest:any;
}

export class ListDisplayInfo{
    metricsColor:string;
    unitTestColor:string;
    functionalTestColor:string;
    buildColor:string;
    panelColorClass:string;
    stateString:string;
    showAcceptedResult:boolean;
    showRejectedResult:boolean;
    showCompleteResult:boolean
}

