import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirewallRoutes } from './index';
import {ItemInfoComponent} from '../itemInfo/index';
@NgModule({
    imports: [CommonModule, RouterModule.forChild(FirewallRoutes)],
    declarations: [FirewallComponent,ItemInfoComponent],
    exports: [FirewallComponent,ItemInfoComponent]
})

export class FirewallModule { 
    
}