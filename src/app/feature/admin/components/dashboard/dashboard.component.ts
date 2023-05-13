import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('chart2') chart2!: ChartComponent;

  public chartOptions!: Partial<ChartOptions> | any;
  public chartOptions2!: Partial<ChartOptions> | any;

  private colors: any = {};

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary')
      .trim();
    this.colors.secondary = getComputedStyle(document.documentElement)
      .getPropertyValue('--secondary')
      .trim();
    this.colors.tertiary = getComputedStyle(document.documentElement)
      .getPropertyValue('--tertiary')
      .trim();
    this.colors.quaternary = getComputedStyle(document.documentElement)
      .getPropertyValue('--quaternary')
      .trim();
    this.initChart();

    this.initChart();
    this.initChart2();
  }

  private initChart() {
    this.chartOptions = {
      series: [33, 33, 33.5],
      chart: {
        width: 450,
        type: 'pie',
      },
      // colors: ['#71c9ce', '#a6e3e9', '#cbf1f5'],
      colors: [
        this.colors.primary,
        this.colors.secondary,
        this.colors.tertiary,
      ],
      labels: ['Team A', 'Team B', 'Team C'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
  private initChart2() {
    this.chartOptions2 = {
      series: [22, 20, 15, 10],
      chart: {
        height: 310,
        type: 'polarArea',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      colors: [
        this.colors.primary,
        this.colors.secondary,
        this.colors.tertiary,
        this.colors.quaternary,
      ],
      stroke: {
        width: 0,
        colors: undefined,
      },
      fill: {
        opacity: 0.8,
      },
      theme: {
        monochrome: {
          //enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
