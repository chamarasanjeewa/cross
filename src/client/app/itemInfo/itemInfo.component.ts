import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'itemInfo',
  templateUrl: 'itemInfo.component.html',
  styleUrls: ['itemInfo.component.css']
})

export class ItemInfoComponent {
     @Input() item: any;
     areaExpanded:boolean=false;
     constructor(){
       
     }

toggle(){
  this.areaExpanded=!this.areaExpanded;
  
}
     

     
 }
