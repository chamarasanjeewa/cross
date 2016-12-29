import { Component,Input,OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'unitTestInfo',
  templateUrl: 'unitTestInfo.component.html',
  styleUrls: ['unitTestInfo.component.css']
})

export class UnitTestInfoComponent implements OnInit{
  @Input() unitTestInfo: any;
  labels:any;
  columnTypes:any;
  chartType:any;
  options:any;
  data:any;

 ngOnInit() {

             this.labels = ['', ''];
             this.data = [this.unitTestInfo.passed,this.unitTestInfo.failed];

             this. columnTypes = [{
                'type': 'string',
                'value': 'subjectName'
              },
                {
                  'type': 'number',
                  'value': 'Marks'
                }];

             this. chartType = 'Pie';

             this. options = {
                'width': 300,
                'height': 300,
                'bars': 'vertical',
                'chartArea': { 'left': 0, 'bottom': 0, 'right': 0, 'top': 0 },
                hAxis: {
                  title: 'Subject'
                },
                vAxis: {
                  title: 'Marks'
                }
              }
       
    }
    
        
 }
