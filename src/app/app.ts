import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { miniChartComponent } from './minichart/minichart.component';
import { chartComponent } from './chart/chart.component';

interface PageData {
  uv: number;
  title: string;
  url: string;
  time: string;
  scrolling: string;
}

interface MetricItem {
  label: string;
  value: number;
  percentage: number;
}

interface TrafficSourceItem {
  label: string;
  percentage: number;
  colorClass: string;
}

interface DeviceItem {
  label: string;
  percentage: number;
  colorClass: string;
}

interface ReferenceItem {
  name: string;
  count: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, chartComponent, miniChartComponent, miniChartComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  onlineUsers = 1096;
  pageviewsToday = 75401;
  uniqueVisitors = 39405;

  references: any;
  userTypes: any;
  rfvMetrics: any;
  pages: any;
  trafficSources: any;
  categoryPages: any;

  ngOnInit() {
    this.buildAll();

    setInterval(() => {
      this.buildAll();
    }, 5000);
  }

  buildAll(): void {
    this.buildReferences();
    this.buildUserTypes();
    this.buildRfvMetrics();
    this.buildTrafficSources();
    this.buildPages();
    this.buildCategoryPages();

    this.cdr.detectChanges();
  }

  buildUserTypes(): void {
    this.userTypes = [
      { label: 'Novo', value: this.getreferencesNumber(), percentage: 100 },
      { label: 'Retornando', value: this.getreferencesNumber(), percentage: 45 },
      { label: 'Fiel', value: this.getreferencesNumber(), percentage: 20 },
      { label: 'Não classificado', value: this.getreferencesNumber(), percentage: 5 },
    ];
  }

  buildRfvMetrics(): void {
    this.rfvMetrics = [
      { label: '0-5', value: this.getreferencesNumber(), percentage: 100 },
      { label: '6-10', value: this.getreferencesNumber(), percentage: 75 },
      { label: '11-15', value: this.getreferencesNumber(), percentage: 60 },
      { label: '16-20', value: this.getreferencesNumber(), percentage: 45 },
      { label: '21-25', value: this.getreferencesNumber(), percentage: 30 },
      { label: '26-30', value: this.getreferencesNumber(), percentage: 15 },
    ];
  }

  buildTrafficSources(): void {
    this.trafficSources = [
      { label: 'Interno', percentage: this.getreferencesNumber(), colorClass: 'purple' },
      { label: 'Busca', percentage: this.getreferencesNumber(), colorClass: 'pink' },
      { label: 'Social', percentage: this.getreferencesNumber(), colorClass: 'cyan' },
      { label: 'Direto', percentage: this.getreferencesNumber(), colorClass: 'purple-dark' },
      { label: 'Links', percentage: this.getreferencesNumber(), colorClass: 'purple-dark' },
    ];
  }

  buildPages(): void {
    this.pages = [
      {
        uv: this.getreferencesNumber(),
        title: 'Correio do Povo',
        url: 'taroba.com.br/',
        time: '0:12',
        scrolling: '73%',
      },
      {
        uv: this.getreferencesNumber(),
        title: 'Adolescente mata pais e irmão de três anos...',
        url: 'taroba.com.br/',
        time: '0:37',
        scrolling: '82%',
      },
      {
        uv: this.getreferencesNumber(),
        title: 'Acúmulo de água alaga ruas, atinge...',
        url: 'taroba.com.br/',
        time: '0:41',
        scrolling: '76%',
      },
      {
        uv: this.getreferencesNumber(),
        title: 'Kannemann está entre as vítimas de...',
        url: 'taroba.com.br/',
        time: '0:22',
        scrolling: '68%',
      },
    ];
  }

  buildReferences(): void {
    this.references = [
      { name: 'Google Discover', count: this.getreferencesNumber() },
      { name: 'Facebook', count: this.getreferencesNumber() },
      { name: 'Google Search', count: this.getreferencesNumber() },
      { name: 'Email, apps, IM', count: this.getreferencesNumber() },
      { name: 'Google News', count: this.getreferencesNumber() },
      { name: 'Taboola', count: this.getreferencesNumber() },
      { name: 'Twitter', count: this.getreferencesNumber() },
      { name: 'T7.com', count: this.getreferencesNumber() },
      { name: 'Bing', count: this.getreferencesNumber() },
      { name: 'Instagram', count: this.getreferencesNumber() },
    ];

    this.cdr.detectChanges();
  }

    buildCategoryPages(): void {
    this.categoryPages = [
      { name: 'Politica', count: this.getreferencesNumber() },
      { name: 'Esportes', count: this.getreferencesNumber() },
    ];

    this.cdr.detectChanges();
  }

  getreferencesNumber(): number {
    return Math.floor(Math.random() * 100);
  }
}
