import { Component } from '@angular/core';
import { async,TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TestService} from '../services/user.service';
import {HomeComponent} from '../home/home.component';
import { Routes } from '@angular/router';
import {DashBoardComponent} from './dashBoard.component';
import { TestInfoService } from '../services/testInfoService';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutes } from './index';
import {FirewallComponent} from '../fireWall/firewall.component'
import {ItemInfoComponent} from '../itemInfo/itemInfo.component'
import {BuildComponent} from '../build/index'
import {MetricsInfoComponent} from '../metricsInfo/metricsInfo.component';
import {BuildInfoComponent} from '../buildInfo/buildInfo.component';
import {UnitTestInfoComponent} from '../unitTestInfo/unitTestInfo.component';
import {FunctionalTestInfoComponent} from '../functionalTestInfo/functionalTestInfo.component';
//import {Ng2GoogleChartModule} from 'ng2-googlechart';
let helloService:any;

beforeEach(() => {
  TestBed.configureTestingModule({
      declarations: [DashBoardComponent,FirewallComponent,ItemInfoComponent,BuildComponent,UnitTestInfoComponent,MetricsInfoComponent,FunctionalTestInfoComponent,BuildInfoComponent],
    imports: [
      // HttpModule, etc.
    ],
    providers: [
      
      {provide: TestInfoService, useValue: helloService}
    ]
  });
});

it("can initialize", async(() => {
    TestBed.compileComponents().then(() => {
        const fixture = TestBed.createComponent(DashBoardComponent);
        let element = fixture.nativeElement;
        let component = fixture.componentInstance;

        fixture.detectChanges();

        expect(element).not.toBeNull();
        expect(component).not.toBeNull();

        //expect(helloService.greet).toHaveBeenCalled();

        let header = element.querySelector("h1");
        expect(header).not.toBeNull();
        expect(header.textContent).toBe("Greeting test");

        let greeting = element.querySelector("#greeting");
        expect(greeting).not.toBeNull();
        expect(greeting.textContent).toBe("greet");
    });
}));