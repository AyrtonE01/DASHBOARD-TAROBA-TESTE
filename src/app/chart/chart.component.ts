import {
  Component,
  ViewChild
} from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule
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
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: 'chart.component.html'
})
export class chartComponent {

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: ChartOptions;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: 'Interno',
          color: '#6815d0',
          data: [10, 41, 35, 51, 49, 62, 69]
        },
        {
          name: 'Busca',
          color: '#1cc7a9',
          data: [5, 31, 25, 11, 59, 62, 89]
        },
        {
          name: 'Social',
          color: '#e859ae',
          data: [70, 41, 45, 51, 49, 22, 69]
        },
        {
          name: 'Direto',
          color: '#FF6B00',
          data: [10, 31, 35, 51, 39, 22, 39]
        },
      ],

      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        }
      },

      title: {
        text: 'Relatório de Vendas'
      },

      xaxis: {
        categories: [
          'Seg',
          'Ter',
          'Qua',
          'Qui',
          'Sex',
          'Sáb',
          'Dom'
        ]
      },

      stroke: {
        curve: 'smooth',
        width: 3
      },

      dataLabels: {
        enabled: false
      }
    };
  }
}