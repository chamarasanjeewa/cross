import { Component } from '@angular/core';
//  import { async,TestBed } from '@angular/core/testing';
//  import {TwainComponent} from './testComponent';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {HomeComponent} from '../home/home.component';
import { Routes } from '@angular/router';
import {DashBoardComponent} from './dashBoard.component';
 import { TestInfoService } from '../services/testInfo.service';
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
import {ResultCompleteComponent} from '../Result/ResultComplete/resultComplete.component';
import {ResultAcceptedComponent} from '../Result/ResultAccepted/resultAccepted.component';
import {ResultRejectedComponent} from '../Result/ResultRejected/resultRejected.component';



import { ComponentFixture, TestBed,async  } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { BannerComponent } from './testComponent';


describe('BannerComponent (templateUrl)', () => {

  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
  let testInfoServiceStub = {
      
    };


    TestBed.configureTestingModule({
     declarations: [DashBoardComponent,FirewallComponent,ItemInfoComponent,BuildComponent,UnitTestInfoComponent,MetricsInfoComponent,FunctionalTestInfoComponent,BuildInfoComponent,ResultCompleteComponent,ResultAcceptedComponent,ResultRejectedComponent],
      providers:[ {provide: TestInfoService, useValue: testInfoServiceStub }]
    })
    .compileComponents();  // compile template and css
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardComponent);

    comp = fixture.componentInstance; 

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  
});