import { Component } from '@angular/core';
 import { TestInfoService } from '../services/testInfoService';
@Component({
  selector: 'app-banner',
  template: '<h1>{{title}}</h1>'
})
export class BannerComponent {
  title = 'Test Tour of Heroes';

  constructor(public testInfo:TestInfoService){

  }
}