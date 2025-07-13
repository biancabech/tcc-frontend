import { Injectable } from '@angular/core';
import { DadosGraficoAnual, DadosGraficoAnualDto } from '../models/DadosGraficoAnual';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }

  async dadosAnuais(): Promise<DadosGraficoAnual> {
    // trocar por chamada de API
    return {
      units: [
        { value: "RJ", label: "RJ" },
        { value: "SP", label: "SP" },
      ],
      turnoverData: [
        { label: "Jan", value: 1 },
        { label: "Fev", value: 4.9 },
        { label: "Mar", value: 0.5 },
        { label: "abr", value: 8 },
        { label: "Mar", value: 2 },
        { label: "Abr", value: 9.2 },
        { label: "Mai", value: 1.5 },
        { label: "Jun", value: 1 },
      ],
      terminationReasons: [
        { label: "Justa Causa", value: 1 },
        { label: "Insatisfação Gestão", value: 2 },
        { label: "Benefícios", value: 5 },
      ],
      hiringReasons: [{ label: "Crescimento", value: 6 }],
      departmentsWithTerminations: [
        { label: "Financeiro", value: 2 },
        { label: "Engenharia", value: 2 },
      ],
      positionsWithTerminations: [{ label: "Auxiliar Financeiro", value: 2 }],
      admittedCount: 10,
      terminatedCount: 4,
    }
  }
}
