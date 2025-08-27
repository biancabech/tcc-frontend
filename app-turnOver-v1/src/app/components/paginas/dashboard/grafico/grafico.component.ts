import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables, Colors } from 'chart.js';

Chart.register(...registerables);

const COLORS = [
  '#9D0429',
  '#EF233C',
  '#EDF2f4',
  '#8D99AE',
  '#2B2D42',
  '#ef4444',
]

@Component({
  selector: 'desenhar-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnChanges {
  chart?: Chart

  @Input() dados?: ChartConfiguration['data'];
  @Input() tipo: ChartConfiguration['type'] = 'line';
  @Input() eixo: 'x' | 'y' = 'x';
  @Input() width: number = 100;
  @Input() height: number = 20;

  @ViewChild('canvas') canvas?: ElementRef;

  ngOnChanges() {
    this.renderChart();
  }

  renderChart() {
    if (this.chart) {
      this.chart.destroy(); // Evita sobreposição de gráficos
    }

    if (!this.dados) return;

    this.chart = new Chart(this.canvas?.nativeElement, {
      type: this.tipo,
      data: this.dados!,
      options: {
        indexAxis: this.tipo == 'bar' ? this.eixo : undefined,
        responsive: true,
      },
    });
  }
}