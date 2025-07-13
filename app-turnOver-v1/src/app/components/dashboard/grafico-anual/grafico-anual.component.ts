import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DadosGraficoAnual } from 'src/app/models/DadosGraficoAnual';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-grafico-anual',
  templateUrl: './grafico-anual.component.html',
  styleUrls: ['./grafico-anual.component.css'],
})
export class GraficoAnualComponent implements OnInit {
  turnoverDataset?: ChartConfiguration['data'];
  motivosDesligamentos?: ChartConfiguration['data'];
  setoresMaiorDesligamento?: ChartConfiguration['data'];
  demitidos = 0;
  admitidos = 0;

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit(): Promise<void> {
    const dados = await this.dashboardService.dadosAnuais();

    this.demitidos = dados.terminatedCount;
    this.admitidos = dados.admittedCount;

    const turnover = dados.turnoverData;
    this.turnoverDataset = {
      datasets: [{
        data: turnover.map(t => t.value),
        label: "% Turnover"
      }],
      labels: turnover.map(t => t.label)
    };

    const motivosDesligamentos = dados.terminationReasons;
    this.motivosDesligamentos = {
      datasets: [{
        data: motivosDesligamentos.map(t => t.value),
        label: "Motivos Desligamentos"
      }],
      labels: motivosDesligamentos.map(t => t.label)
    };

    console.log(this.motivosDesligamentos, motivosDesligamentos);



    const setoresMaiorDesligamento = dados.terminationReasons;
    this.setoresMaiorDesligamento = {
      datasets: [{
        data: setoresMaiorDesligamento.map(t => t.value),
        label: "TOP 5 Setores com mais Desligamentos"
      }],
      labels: setoresMaiorDesligamento.map(t => t.label)
    };

    console.log(this.setoresMaiorDesligamento, setoresMaiorDesligamento);
  }
}
