import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemInfoRoutes, ItemInfoComponent } from './index';
import {MetricsInfoComponent} from '../metricsInfo/index';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(ItemInfoRoutes)],
    declarations: [ItemInfoComponent,MetricsInfo],
    exports: [ItemInfoComponent,MetricsInfoComponent]
})

export class ItemInfolModule { 
    
}
