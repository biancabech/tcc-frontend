import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/Cargo';
import { FitCultural } from 'src/app/models/Fit-Cultural';
import { Setor } from 'src/app/models/Setor';
import { FitCulturalService } from 'src/app/services/fit-cultural.service';

@Component({
  selector: 'app-fit-cutural',
  templateUrl: './fit-cultural.component.html',
  styleUrls: ['./fit-cultural.component.css']
})

export class FitCulturalComponent implements OnInit {
  faHandshake = faHandshake;
  listaDeFitCulturalsUrl = '/paginas/paginas-listagem/listagem-fit-cultural';
  acao = '';

  fitCultural: FitCultural = {
    id: '',
    nome: '',
    data: '',
    trabalhoEquipe: false,
    adaptabilidade: false,
    comunicativo: false,
    resolucaoConflitos: false,
    iniciativa: false,
    descricao: '',
  };

  cargos: Cargo[] = [];
  setores: Setor[] = [];
  porcentagem!: number;
  erroValidacao: string | null = null;

  constructor(
    private fitCulturalService: FitCulturalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,


  ) { }


  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.fitCultural.id = queryParam.get('id') || ''; // se retornar null, assume string vazio


      this.acao = 'Cadatrar';


      if (this.fitCultural.id) {
        this.acao = 'Editar';
        this.carregarFitCultural();
      }
    })


  }
  carregarFitCultural() {
    this.fitCulturalService.get(this.fitCultural.id).subscribe({
      next: (fitCultural) => {
        this.fitCultural = fitCultural;
        this.fitCultural.data = this.fitCultural.data?.split('T')?.at(0) || '';
      },
      error: (e) => {
        console.log(e);
        this.router.navigate([this.listaDeFitCulturalsUrl]);

        if (e.error.status == 404) {
          this.toastr.error('Fit Cultural não encontrado');
        } else {
          this.toastr.error('Erro ao carregar o Fit Cultural');
        }
      }
    })
  }


  salvarFitCultural() {

    if (this.fitCultural.id) {
      this.atualizarFitCultural();
    } else {
      this.cadastrarFitCultural();
    };
  }



  async atualizarFitCultural() {
    try {
      this.fitCulturalService.put(this.fitCultural, this.fitCultural.id);
      this.fitCultural.data = this.fitCultural.data?.split('T')?.at(0) || '';
      await this.toastr.success('Fit Cultural atualizado com sucesso');
      await this.router.navigate([this.listaDeFitCulturalsUrl]);

    } catch (e: any) {
      this.toastr.error('Erro ao atualizar Fit Cultural');
    }
  }


  cadastrarFitCultural() {
    this.fitCulturalService.post(this.fitCultural).subscribe({
      next: () => {
        this.toastr.success('Fit Cultural cadastrado com sucesso');
        this.router.navigate([this.listaDeFitCulturalsUrl]);
      },
      error: (e) => {
        console.log(e);
        this.toastr.error('Erro ao cadastrar Fit Cultural');
      }
    })
  }

  calcularPorcentagemAtual() {
    const criteriosAtendidos = [
      this.fitCultural.adaptabilidade,
      this.fitCultural.comunicativo,
      this.fitCultural.resolucaoConflitos,
      this.fitCultural.iniciativa,
      this.fitCultural.trabalhoEquipe,
    ].filter(Boolean).length;

    return {
      pontos: criteriosAtendidos,
      total: 5,
      percentual: Math.round((criteriosAtendidos / 5) * 100),
    };
  }

  CalcularMeetCultural() {
    const total = 5; // Total de critérios
    let atendidos = 0;

    if (this.fitCultural.adaptabilidade) atendidos++;
    if (this.fitCultural.comunicativo) atendidos++;
    if (this.fitCultural.resolucaoConflitos) atendidos++;
    if (this.fitCultural.iniciativa) atendidos++;
    if (this.fitCultural.trabalhoEquipe) atendidos++;

    this.porcentagem = (atendidos / total) * 100;

    console.log(`Porcentagem de atendimento: ${this.porcentagem}%`);
    return this.porcentagem;
  }


}
