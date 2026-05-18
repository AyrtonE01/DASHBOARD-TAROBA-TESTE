import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  onlineUsers = 1096;
  pageviewsToday = 75401;
  uniqueVisitors = 39405;

  userTypes: MetricItem[] = [
    { label: 'Novo', value: 218, percentage: 100 },
    { label: 'Retornando', value: 482, percentage: 45 },
    { label: 'Fiel', value: 389, percentage: 20 },
    { label: 'Não classificado', value: 7, percentage: 5 }
  ];

  rfvMetrics: MetricItem[] = [
    { label: '0-5', value: 245, percentage: 100 },
    { label: '6-10', value: 189, percentage: 75 },
    { label: '11-15', value: 156, percentage: 60 },
    { label: '16-20', value: 123, percentage: 45 },
    { label: '21-25', value: 98, percentage: 30 },
    { label: '26-30', value: 67, percentage: 15 }
  ];

  trafficSources: TrafficSourceItem[] = [
    { label: 'Interno', percentage: 44, colorClass: 'purple' },
    { label: 'Busca', percentage: 35, colorClass: 'pink' },
    { label: 'Social', percentage: 14, colorClass: 'cyan' },
    { label: 'Direto', percentage: 6, colorClass: 'purple-dark' },
    { label: 'Links', percentage: 2, colorClass: 'purple-dark' }
  ];

  pages: PageData[] = [
    { uv: 68, title: 'Correio do Povo', url: 'taroba.com.br/', time: '0:12', scrolling: '73%' },
    { uv: 25, title: 'Adolescente mata pais e irmão de três anos...', url: 'taroba.com.br/', time: '0:37', scrolling: '82%' },
    { uv: 16, title: 'Acúmulo de água alaga ruas, atinge...', url: 'taroba.com.br/', time: '0:41', scrolling: '76%' },
    { uv: 12, title: 'Kannemann está entre as vítimas de...', url: 'taroba.com.br/', time: '0:22', scrolling: '68%' }
  ];

  references: ReferenceItem[] = [
    { name: 'Google Discover', count: 303 },
    { name: 'Facebook', count: 99 },
    { name: 'Google Search', count: 74 },
    { name: 'Email, apps, IM', count: 50 },
    { name: 'Google News', count: 11 },
    { name: 'Taboola', count: 4 },
    { name: 'Twitter', count: 4 },
    { name: 'T7.com', count: 3 },
    { name: 'Bing', count: 2 },
    { name: 'Instagram', count: 2 }
  ];
}