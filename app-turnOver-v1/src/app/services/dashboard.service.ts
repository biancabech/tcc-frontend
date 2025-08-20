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
        { label: "Dez/2024", value: 1 },
        { label: "Jan/2025", value: 1 },
        { label: "Fev/2025", value: 4.9 },
        { label: "Mar/2025", value: 0.5 },
        { label: "abr/2025", value: 8 },
        { label: "Mar/2025", value: 2 },
        { label: "Abr/2025", value: 9.2 },
        { label: "Mai/2025", value: 1.5 },
        { label: "Jun/2025", value: 1 },
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
