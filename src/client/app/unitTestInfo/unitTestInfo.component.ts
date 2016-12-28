import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'unitTestInfo',
  templateUrl: 'unitTestInfo.component.html',
  styleUrls: ['unitTestInfo.component.css']
})

export class UnitTestInfoComponent {
  @Input() unitTestInfo: any;
 }
