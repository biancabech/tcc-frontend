import { Component } from '@angular/core';
import { FitCultural } from 'src/app/models/FitCultural';
import { FitCulturalService } from 'src/app/services/fit-cultural.service';



@Component({
  selector: 'app-fit-cutural',
  templateUrl: './fit-cultural.component.html',
  styleUrls: ['./fit-cultural.component.css']
})


export class FitCulturalComponent {
  currentView: "form" | "search" = "form";
  fitCultural: FitCultural = {
    nome: '',
    data: '',
    trabalhoEquipe: false,
    adaptabilidade: false,
    comunicativo: false,
    pensamentoCritico: false,
    gestaoTempo: false,
    empatia: false,
    proatividade: false,
    alinhadoValores: false,
    iniciativa: false,
    observacoes: ''
  };

  fitCulturals: FitCultural[] = [];
  erro: string = '';
  mensagem: string = '';
  mensagemDeSucesso: string = '';
  mensagemDeErro: string = '';


  constructor(private fitcultural: FitCulturalService) { }

  criterios = [
    { key: "colaborativo", label: "Demonstra espírito de colaboração", icon: "🤝", peso: 20 },
    { key: "adaptabilidade", label: "Mostra adaptabilidade a mudanças", icon: "🔄", peso: 20 },
    { key: "comunicativo", label: "Boa comunicação interpessoal", icon: "💬", peso: 20 },
    { key: "alinhadoValores", label: "Alinhamento com os valores da empresa", icon: "🎯", peso: 20 },
    { key: "iniciativa", label: "Proatividade e iniciativa", icon: "⚡", peso: 20 },
  ];

  ngOnInit(): void {

  }

  alternarVisualizacao(view: "form" | "search") {

  }

  calcularPorcentagemAtual() {
    const criteriosAtendidos = [
      this.fitCultural.adaptabilidade,
      this.fitCultural.comunicativo,
      this.fitCultural.alinhadoValores,
      this.fitCultural.iniciativa,
    ].filter(Boolean).length;

    return {
      pontos: criteriosAtendidos,
      total: 5,
      percentual: Math.round((criteriosAtendidos / 5) * 100),
    };
  }

  salvarFitCultural() {
    this.fitCulturals.push({ ...this.fitCultural });
    this.mensagemDeSucesso = 'Fit Cultural salvo com sucesso!';
    this.mensagemDeErro = '';
    this.fitCultural = {
      nome: '',
      data: '',
      trabalhoEquipe: false,
      adaptabilidade: false,
      comunicativo: false,
      pensamentoCritico: false,
      gestaoTempo: false,
      empatia: false,
      proatividade: false,
      alinhadoValores: false,
      iniciativa: false,
      observacoes: ''
    };
  }


  porcentagem!: number
  public CalcularMeetCultural() {
    const total = 5; // Total de critérios
    let atendidos = 0;


    if (this.fitCultural.trabalhoEquipe) atendidos++;
    if (this.fitCultural.adaptabilidade) atendidos++;
    if (this.fitCultural.comunicativo) atendidos++;
    if (this.fitCultural.pensamentoCritico) atendidos++;
    if (this.fitCultural.proatividade) atendidos++;
    if (this.fitCultural.gestaoTempo) atendidos++;




    this.porcentagem = (atendidos / total) * 100;


    console.log(`Porcentagem de atendimento: ${this.porcentagem}%`);
    return this.porcentagem;
  }
}