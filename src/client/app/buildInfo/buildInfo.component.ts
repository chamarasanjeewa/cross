import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'buildInfo',
  templateUrl: 'buildInfo.component.html',
  styleUrls: ['buildInfo.component.css']
})

export class BuildInfoComponent {
  @Input() buildInfo: any;
 }
