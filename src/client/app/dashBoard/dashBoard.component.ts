import { Component, OnInit, NgModule,Input  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TestInfoService } from '../services/testInfoService';
import {TestInfoModel} from '../models/testInfoModel'


@Component({
    moduleId: module.id,
    // selector: 's',
    templateUrl: 'dashBoard.component.html',
    styleUrls: ['dashBoard.component.css'],
    providers: [TestInfoService]
})
export class DashBoardComponent implements OnInit {
   
      private testInfolist: TestInfoModel[] = [];
    constructor(public fb: FormBuilder, private route: ActivatedRoute,private router:Router) {
     
    }

    prepareMockData(){

        var testInfoLine1: TestInfoModel = new TestInfoModel();
        testInfoLine1.name="Tenrox-R1_1235";
        testInfoLine1.owner="jtuck";
        testInfoLine1.type="firewall";
        testInfoLine1.timeStarted="4/18/2014 12.45pm";
        testInfoLine1.state="complete";
        testInfoLine1.metrics={'test':23,'maintainability':23,'security':45, 'workmanship':56};
        testInfoLine1.build={'debug':true,'release':true,'time':'10:46 am','date':'4/17/2014'};
        testInfoLine1.unitTest={'passed':23, 'failed':45};
        testInfoLine1.functionalTest={'passed':26, 'failed':76};
        this.testInfolist.push(testInfoLine1);

        var testInfoLine2: TestInfoModel = new TestInfoModel();
        testInfoLine2.name="432462";
        testInfoLine2.owner="samy";
        testInfoLine2.type="build";
        testInfoLine2.timeStarted="4/18/2014 12:12pm";
        testInfoLine2.state="complete";
        testInfoLine2.metrics={'test':56,'maintainability':78,'security':35, 'workmanship':56};
        testInfoLine2.build={'debug':true,'release':true,'time':'10:46 am','date':'4/17/2014'};
        testInfoLine2.unitTest={'passed':67, 'failed':67};
        testInfoLine2.functionalTest={'passed':23, 'failed':45};

        this.testInfolist.push(testInfoLine2);

        var testInfoLine3: TestInfoModel = new TestInfoModel();
        testInfoLine3.name="432462";
        testInfoLine3.owner="samy";
        testInfoLine3.type="firewall";
        testInfoLine3.timeStarted="4/18/2014 12:12pm";
        testInfoLine3.state="complete";
        testInfoLine3.metrics={'test':56,'maintainability':78,'security':35, 'workmanship':56};
        testInfoLine3.build={'debug':true,'release':true,'time':'10:46 am','date':'4/17/2014'};
        testInfoLine3.unitTest={'passed':67, 'failed':67};
        testInfoLine3.functionalTest={'passed':23, 'failed':45};

     this.testInfolist.push(testInfoLine3);

     
        var testInfoLine4: TestInfoModel = new TestInfoModel();
        testInfoLine4.name="432462";
        testInfoLine4.owner="samy";
        testInfoLine4.type="firewall";
        testInfoLine4.timeStarted="4/18/2014 12:12pm";
        testInfoLine4.state="complete";
        testInfoLine4.metrics={'test':56,'maintainability':78,'security':35, 'workmanship':56};
        testInfoLine4.build={'debug':true,'release':true,'time':'10:46 am','date':'4/17/2014'};
        testInfoLine4.unitTest={'passed':67, 'failed':67};
        testInfoLine4.functionalTest={'passed':23, 'failed':45};

     this.testInfolist.push(testInfoLine4);
    }

    
    ngOnInit() {

       
    }
}
