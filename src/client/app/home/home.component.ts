import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  
    labels = ['DS', 'LD', 'EC', 'M3', 'DS Lab', 'EC Lab'];
              data = [83, 75, 67, 50, 90, 35];

              columnTypes = [{
                'type': 'string',
                'value': 'subjectName'
              },
                {
                  'type': 'number',
                  'value': 'Marks'
                }];

              chartType = 'Pie';

              options = {
                'width': 750,
                'height': 400,
                'bars': 'vertical',
                'chartArea': { 'left': 150, 'bottom': 50, 'right': 100, 'top': 50 },
                hAxis: {
                  title: 'Subject'
                },
                vAxis: {
                  title: 'Marks'
                }
              }
          

  constructor() {}

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    
  }
}
