import { Component,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'firewall',
  templateUrl: 'firewall.component.html',
  styleUrls: ['firewall.component.css']
})

export class FirewallComponent {

  @Input() firewallItem: any;
  
  constructor(){

  }

 }
