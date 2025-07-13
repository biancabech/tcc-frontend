import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FitCultural } from 'src/app/models/Fit-Cultural';

@Component({
  selector: 'app-fit-cutural',
  templateUrl: './fit-cultural.component.html',
  styleUrls: ['./fit-cultural.component.css']
})
export class FitCulturalComponent {
  fitCultural: FitCultural = {
    nome: '',
    data: '',
    colaborativo: false,
    adaptabilidade: false,
    comunicativo: false,
    alinhadoValores: false,
    iniciativa: false,
    observacoes: ''
  };
  mensagemDeSucesso: string = '';
  mensagemDeErro: string = '';

  constructor(private apiService: ApiService) { }

  salvarFitCultural() {
    this.apiService.post<FitCultural>('fitcultural', this.fitCultural).subscribe({
      next: () => {
        this.mensagemDeSucesso = 'Avaliação salva com sucesso!';
        this.mensagemDeErro = '';
      },
      error: (error) => {
        this.mensagemDeSucesso = '';
        if (error && error.error && error.error.message) {
          this.mensagemDeErro = 'Erro ao salvar avaliação: ' + error.error.message;
        } else if (error && error.status) {
          this.mensagemDeErro = `Erro ao salvar avaliação (status ${error.status})`;
        } else {
          this.mensagemDeErro = 'Erro ao salvar avaliação.';
        }
        console.error('Erro ao salvar avaliação:', error);
      }
    });
  }
}
