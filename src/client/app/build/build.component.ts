import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'build',
  templateUrl: 'build.component.html',
  styleUrls: ['build.component.css']
})

export class BuildComponent {
   @Input() buildItem: any;
 
}
