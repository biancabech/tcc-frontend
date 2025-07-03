import { Component, OnInit } from '@angular/core';
import { DadosGraficoAnual } from 'src/app/models/dadosGraficoAnual';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-grafico-anual',
  templateUrl: './grafico-anual.component.html',
  styleUrls: ['./grafico-anual.component.css'],
})
export class GraficoAnualComponent implements OnInit {
  dados: DadosGraficoAnual | null = null

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit(): Promise<void> {
    this.dados = await this.dashboardService.dadosAnuais();
  }
}
