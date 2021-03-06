import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes, DashBoardComponent } from './index';
import {FirewallComponent} from '../fireWall/firewall.component'
import {ItemInfoComponent} from '../itemInfo/itemInfo.component'
import {BuildComponent} from '../build/index'
import {MetricsInfoComponent} from '../metricsInfo/metricsInfo.component';
import {BuildInfoComponent} from '../buildInfo/buildInfo.component';
import {UnitTestInfoComponent} from '../unitTestInfo/unitTestInfo.component';
import {ResultCompleteComponent} from '../Result/ResultComplete/resultComplete.component';
import {ResultAcceptedComponent} from '../Result/ResultAccepted/resultAccepted.component';
import {ResultRejectedComponent} from '../Result/ResultRejected/resultRejected.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {FunctionalTestInfoComponent} from '../functionalTestInfo/functionalTestInfo.component';
//import {Ng2GoogleChartModule} from 'ng2-googlechart';
@NgModule({
    imports: [CommonModule, RouterModule.forChild(DashBoardRoutes),ChartsModule],
    declarations: [DashBoardComponent,FirewallComponent,ItemInfoComponent,BuildComponent,UnitTestInfoComponent,MetricsInfoComponent,FunctionalTestInfoComponent,BuildInfoComponent,ResultCompleteComponent,ResultRejectedComponent,ResultAcceptedComponent],
    exports: [DashBoardComponent]
})

export class DashBoardModule {

    
}
