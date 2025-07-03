import { Injectable } from '@angular/core';
import { DadosGraficoAnual } from '../models/dadosGraficoAnual';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }

  async dadosAnuais(): Promise<DadosGraficoAnual> {
    // trocar por chamada de API
    return {
      anos: ["2023", "2024", "2025"],
      meses: [
        { value: "1", label: "Jan" },
        { value: "2", label: "Fev" },
        { value: "3", label: "Mar" },
        { value: "4", label: "Abr" },
        { value: "5", label: "Mai" },
        { value: "6", label: "Jun" },
        { value: "7", label: "Jul" },
        { value: "8", label: "Ago" },
        { value: "9", label: "Set" },
        { value: "10", label: "Out" },
        { value: "11", label: "Nov" },
        { value: "12", label: "Dez" },
      ],
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
