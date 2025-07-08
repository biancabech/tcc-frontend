import { Injectable } from '@angular/core';
import { DadosGraficoAnual, DadosGraficoAnualDto } from '../models/dadosGraficoAnual';

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
        { label: "Jan", value: 2.4 },
        { label: "Fev", value: 2.9 },
        { label: "Mar", value: 1.5 },
      ],
      terminationReasons: [
        { label: "Justa Causa", value: 2 },
        { label: "Insatisfação Gestão", value: 2 },
      ],
      hiringReasons: [{ label: "Crescimento", value: 6 }],
      departmentsWithTerminations: [
        { label: "Financeiro", value: 2 },
        { label: "Engenharia", value: 2 },
      ],
      positionsWithTerminations: [{ label: "Auxiliar Financeiro", value: 2 }],
      admittedCount: 6,
      terminatedCount: 4,
    }
  }
}
