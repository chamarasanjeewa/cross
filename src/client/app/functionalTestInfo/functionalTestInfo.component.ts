import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'functionalTestInfo',
    templateUrl: 'functionalTestInfo.component.html',
    styleUrls: ['functionalTestInfo.component.css']
})

export class FunctionalTestInfoComponent implements OnInit {

    @Input() functionalTestInfo: any;

    private pieChartData: number[];
    private pieChartType: string = 'pie';
    private chartColors: any[];



    constructor() {


    }

    ngOnInit() {
        this.pieChartData = [this.functionalTestInfo.passed, this.functionalTestInfo.failed];
        this.chartColors = [{ backgroundColor: ["green", "red"] }];


    }
}
