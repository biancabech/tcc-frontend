import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

const CORES_MOTIVO_DESLIGAMENTO = [
  '#8D99AE',
  '#2B2D42',
  '#EF233C',
  '#9D0429',
  '#EDF2f4',
]

const CORES_TURNOVER = [
  '#2B2D42',
]

const DESLIGAMENTO = [
  '#ef4444',
]


@Component({
  selector: 'app-grafico-anual',
  templateUrl: './grafico-anual.component.html',
  styleUrls: ['./grafico-anual.component.css'],
})
export class GraficoAnualComponent implements OnInit {
  faChartBar = faChartBar;
  turnoverDataset?: ChartConfiguration['data'];
  motivosDesligamentos?: ChartConfiguration['data'];
  desligamentosPorSetor?: ChartConfiguration['data'];
  desligamentosPorCargos?: ChartConfiguration['data'];
  demitidos = 0;
  admitidos = 0;

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit(): Promise<void> {
    const dados = await this.dashboardService.getDadosAnuais();

    this.demitidos = dados.qtdeDesligados;
    this.admitidos = dados.qtdeAdmitidos;

    const turnover = dados.dadosTurnover;
    this.turnoverDataset = {
      datasets: [{
        data: turnover.map(t => t.valor),
        label: "% Turnover",
        backgroundColor: CORES_MOTIVO_DESLIGAMENTO,
      }],
      labels: turnover.map(t => t.titulo)
    };

    const motivosDesligamentos = dados.motivosDeDesligamento;
    this.motivosDesligamentos = {
      datasets: [{
        data: motivosDesligamentos.map(t => t.valor),
        label: "Motivos Desligamentos",
        backgroundColor: DESLIGAMENTO,

      }],
      labels: motivosDesligamentos.map(t => t.titulo)
    };

    console.log(this.motivosDesligamentos, motivosDesligamentos);



    const desligamentosPorSetor = dados.desligamentosPorSetor;
    this.desligamentosPorSetor = {
      datasets: [{
        data: desligamentosPorSetor.map(t => t.valor),
        label: "Setores com mais Desligamentos",
        backgroundColor: CORES_MOTIVO_DESLIGAMENTO,
      }],
      labels: desligamentosPorSetor.map(t => t.titulo)
    };

    const desligamentosPorCargos = dados.desligamentosPorCargos;
    this.desligamentosPorCargos = {
      datasets: [{
        data: desligamentosPorCargos.map(t => t.valor),
        label: "Setores com mais Desligamentos",
        backgroundColor: CORES_MOTIVO_DESLIGAMENTO,
      }],
      labels: desligamentosPorCargos.map(t => t.titulo)
    };
  }
}