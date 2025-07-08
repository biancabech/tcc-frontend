import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'desenhar-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnChanges {
  chart?: Chart

  @Input() dados?: ChartConfiguration['data'];
  @Input() tipo: ChartConfiguration['type'] = 'line';
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
        responsive: true,
      },
    });
  }
}
