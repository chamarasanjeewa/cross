import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes, DashBoardComponent } from './index';
import {FirewallComponent} from '../firewall/index'
import {BuildComponent} from '../build/index'
@NgModule({
    imports: [CommonModule, RouterModule.forChild(DashBoardRoutes)],
    declarations: [DashBoardComponent,FirewallComponent,BuildComponent],
    exports: [DashBoardComponent]
})

export class DashBoardModule {}
