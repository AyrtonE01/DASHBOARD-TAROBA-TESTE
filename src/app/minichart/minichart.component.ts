import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'mini-app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './minichart.component.html',
})
export class miniChartComponent {
  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Interno',
          color: '#6815d0',
          data: [10, 41, 35, 51, 49, 62, 69],
        },
      ],

      chart: {
        type: 'line',
        height: 60,
        width: 75,
        sparkline: {
          enabled: true,
        },
      },

      title: {
        text: '',
      },

      xaxis: {
        categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      },

      stroke: {
        curve: 'smooth',
        width: 3,
      },

      dataLabels: {
        enabled: false,
      },
    };
  }
}
