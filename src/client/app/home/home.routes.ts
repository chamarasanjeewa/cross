import { Routes } from '@angular/router';
import { HomeComponent } from './index';


export const HomeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
          { path: '', redirectTo: 'dashBoard', pathMatch: 'full' },
        
          { path: 'dashBoard',   loadChildren: 'app/dashBoard/dashBoard.module#DashBoardModule'},
          
      ]
  }
];
