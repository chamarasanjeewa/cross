import { Component,Input,OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'functionalTestInfo',
  templateUrl: 'functionalTestInfo.component.html',
  styleUrls: ['functionalTestInfo.component.css']
})

export class FunctionalTestInfoComponent implements OnInit {
 
  @Input() functionalTestInfo: any;
   labels:any;
  columnTypes:any;
  chartType:any;
  options:any;
  data:any;

constructor(){
  
 
}

 ngOnInit() {
    this.labels = ['', ''];
             this.data = [this.functionalTestInfo.passed,this.functionalTestInfo.failed];

             this.columnTypes = [{
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
