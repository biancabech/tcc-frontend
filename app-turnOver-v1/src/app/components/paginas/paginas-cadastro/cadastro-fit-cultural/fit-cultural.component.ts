import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { FitCultural } from 'src/app/models/Fit-Cultural';
import { FitCulturalService } from 'src/app/services/fit-cultural.service';






@Component({
  selector: 'app-fit-cutural',
  templateUrl: './fit-cultural.component.html',
  styleUrls: ['./fit-cultural.component.css']
})




export class FitCulturalComponent implements OnInit {
  faHandshake = faHandshake;
  listaDeFitCulturalsUrl = '/paginas/paginas-listagem/listagem-fitculturals';
  acao = '';

  fitCultural: FitCultural = {
    id: '',
    nome: '',
    data: '',
    trabalhoEquipe: false,
    adaptabilidade: false,
    comunicativo: false,
    resolucaoComflitos: false,
    iniciativa: false,
    observacoes: '',
    createdAt: '',
  };

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
        this.buscarFitCultural();
      }
    })


  }
  buscarFitCultural() {
    this.fitCulturalService.get(this.fitCultural.id).subscribe({
      next: (fitCultural) => {
        this.fitCultural = fitCultural;
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
    const validou = this.validarFormulario();
    if (!validou) return;
    if (this.fitCultural.id) {
      this.atualizarFitCultural();
    } else {
      this.cadastrarFitCultural();
    };
  }
  atualizarFitCultural() {
    this.fitCulturalService.put(this.fitCultural, this.fitCultural.id).subscribe({
      next: () => {
        this.toastr.success('Fit Cultural atualizado com sucesso');
        this.router.navigate([this.listaDeFitCulturalsUrl]);
      },
      error: (e) => {
        console.log('Erro ao cadatrar fit cultural', e);
        this.toastr.error('Erro ao atualizar Fit Cultural');
      }
    })
  }
  cadastrarFitCultural() {
    this.fitCulturalService.post(this.fitCultural).subscribe({
      next: (id) => {
        this.toastr.success('Fit Cultural cadastrado com sucesso');
        this.router.navigate([this.listaDeFitCulturalsUrl]);
      },
      error: (e) => {
        console.log(e);
        this.toastr.error('Erro ao cadastrar Fit Cultural');
      }
    })
  }
  validarFormulario() {
    this.erroValidacao = null;
    if (this.fitCultural.nome.trim() === "") {
      this.erroValidacao = 'Nome do setor é inválido'
    }

    let temErro = !this.erroValidacao;

    return temErro;
  }

  calcularPorcentagemAtual() {
    const criteriosAtendidos = [
      this.fitCultural.adaptabilidade,
      this.fitCultural.comunicativo,
      this.fitCultural.resolucaoComflitos,
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
    if (this.fitCultural.resolucaoComflitos) atendidos++;
    if (this.fitCultural.iniciativa) atendidos++;
    if (this.fitCultural.trabalhoEquipe) atendidos++;

    this.porcentagem = (atendidos / total) * 100;




    console.log(`Porcentagem de atendimento: ${this.porcentagem}%`);
    return this.porcentagem;
  }
}
