import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { DadosGraficoAnual } from '../models/dadosGraficoAnual';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `http://localhost:5432/api`;
  constructor(private http: HttpClient) { }

  async getDadosAnuais(): Promise<DadosGraficoAnual> {
    try {
      return await lastValueFrom(
        this.http.get<DadosGraficoAnual>(`${this.apiUrl}/DadosGraficoAnual`)

      )
    } catch (e) {
      console.error('Erro ao buscar funcionario:', e);
      throw e;
    }
  }
}
