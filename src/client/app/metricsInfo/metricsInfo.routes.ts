import { Routes } from '@angular/router';
import { metricsInfoComponent } from './index';

export const metricsInfoRoutes: Routes = [
  { path: '', pathMatch: 'full', component: metricsInfoComponent }
];