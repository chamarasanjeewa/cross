import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'unitTestInfo',
    templateUrl: 'unitTestInfo.component.html',
    styleUrls: ['unitTestInfo.component.css']
})

export class UnitTestInfoComponent implements OnInit {
    @Input() unitTestInfo: any;


    private pieChartData: number[];
    private pieChartType: string = 'pie';
    private chartColors: any[];


    ngOnInit() {

        this.pieChartData = [this.unitTestInfo.passed, this.unitTestInfo.failed];
        this.chartColors= [{ backgroundColor: ["green", "red"] }];


    }


}
