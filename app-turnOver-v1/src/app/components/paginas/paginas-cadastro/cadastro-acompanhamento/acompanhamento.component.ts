import { Component } from '@angular/core';
import { Acompanhamento } from 'src/app/models/Acompanhamento';


@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css']
})
export class AcompanhamentoComponent {
  acompanhamento: Acompanhamento = {
    funcionarioId: '', // para receber Guid
    data: '',
    produtividade: '',
    qualidade: '',
    prazos: '',
    comunicacao: false,
    trabalhoEquipe: false,
    adaptabilidade: false,
    proatividade: false,
    feedback: '',
    treinamento: '',
    plano: '',
    avaliador: '',
    confirmacao: ''
  };
  mensagemDeSucesso: string = '';
  mensagemDeErro: string = '';

  constructor() { }

  ngOnInit(): void {
    // Inicialização se necessário
  }

  salvarAcompanhamento() {

    this.mensagemDeSucesso = 'Acompanhamento salvo com sucesso!';
    this.mensagemDeErro = '';
    this.acompanhamento = {
      funcionarioId: '',
      data: '',
      produtividade: '',
      qualidade: '',
      prazos: '',
      comunicacao: false,
      trabalhoEquipe: false,
      adaptabilidade: false,
      proatividade: false,
      feedback: '',
      treinamento: '',
      plano: '',
      avaliador: '',
      confirmacao: ''
    };
  }
  porcentagem!: number;
  calcularPorcentagem() {
    const totalCampos = 11; // Total de campos booleanos
    const camposPreenchidos = Object.values(this.acompanhamento).filter(value => value === true).length;
    this.porcentagem = (camposPreenchidos / totalCampos) * 100;


    if (this.porcentagem >= 80) {
      this.mensagemDeSucesso = 'Acompanhamento satisfatório!';
      this.mensagemDeErro = '';
    } else {
      this.mensagemDeErro = 'Acompanhamento insatisfatório, revisão necessária!';
      this.mensagemDeSucesso = '';
    }
  }
}