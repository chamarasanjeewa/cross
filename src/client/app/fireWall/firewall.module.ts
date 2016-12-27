import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirewallRoutes, FirewallComponent } from './index';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(FirewallRoutes)],
    declarations: [FirewallComponent],
    exports: [FirewallComponent]
})

export class FirewallModule { 
    
}
