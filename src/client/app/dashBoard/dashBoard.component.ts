import { Component, OnInit, NgModule,Input  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TestInfoService } from '../services/testInfo.service';
import {TestInfoModel} from '../models/testInfoModel'
//import {Ng2GoogleChartModule} from 'ng2-googlechart';

@Component({
    moduleId: module.id,
    // selector: 's',
    templateUrl: 'dashBoard.component.html',
    styleUrls: ['dashBoard.component.css'],
    providers: [TestInfoService]
})
export class DashBoardComponent implements OnInit {
   
    private testInfolist: TestInfoModel[] = [];
    constructor(public fb: FormBuilder, private route: ActivatedRoute,private router:Router,private testInfoService:TestInfoService) {
    // this.prepareMockData();
     testInfoService.getTestRecordsFromJson().subscribe(data=>{
        this.testInfolist=data;
     })
    }

    ngOnInit() {

       
    }
}
