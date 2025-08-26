import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MotivoDesligamento } from 'src/app/models/MotivoDesligamento';
import { MotivoDesligamentoService } from 'src/app/services/motivo-desligamento.service';

@Component({
  selector: 'app-cadastro-motivo-desligamento',
  templateUrl: './cadastro-motivo-desligamento.component.html',
  styleUrls: ['./cadastro-motivo-desligamento.component.css']
})
export class MotivoDesligamentoComponent implements OnInit {
  listaDeMotivosDesligamentoUrl = '/paginas/paginas-listagem/listagem-motivo-desligamento'
  acao = '';

  motivodesligamento: MotivoDesligamento = {
    id: '',
    motivo: '',
    descricao: '',
  }
  erroValidacao: string | null = null;

  constructor(
    private motivoDesligamentoService: MotivoDesligamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      // queryParam funciona como um Map
      this.motivodesligamento.id = queryParam.get('id') || ''; // se retornar null ou undefined, assume string vazio

      this.acao = 'Cadatrar';

      if (this.motivodesligamento.id) {
        this.acao = 'Editar';
        this.buscarMotivoDesligamento();
      }
    })
  }

  buscarMotivoDesligamento() {
    this.motivoDesligamentoService.get(this.motivodesligamento.id).subscribe({
      next: (motivodesligamento) => {
        this.motivodesligamento = motivodesligamento;
      },
      error: (e) => {
        console.log(e);
        this.router.navigate([this.listaDeMotivosDesligamentoUrl]);

        if (e.error.status == 404) {
          this.toastr.error('Motivo de Desligamento não encontrado');
        } else {
          this.toastr.error('Erro ao carregar o motivo de desligamento');
        }
      }
    })
  }

  salvarMotivoDesligamento() {
    const validou = this.validarFormulario();
    if (!validou) return;
    if (this.motivodesligamento.id) {
      this.atualizarMotivoDesligamento();
    } else {
      this.cadastrarMotivoDesligamento();
    }
  }

  validarFormulario() {
    this.erroValidacao = null;
    if (this.motivodesligamento.motivo.trim() === "") {
      this.erroValidacao = 'Motivo é inválido'
    }
    let temErro = !this.erroValidacao;

    return temErro;
  }
  atualizarMotivoDesligamento() {
    this.motivoDesligamentoService.put(this.motivodesligamento, this.motivodesligamento.id).subscribe({
      next: () => {
        this.toastr.success('Motivo de desligamento atualizado com sucesso!');
        this.router.navigate([this.listaDeMotivosDesligamentoUrl]);
      },
      error: (e) => {
        console.log('Erro ao atualizar motivo de desligamento', e);
        this.toastr.error('Erro ao cadatrar motivo de desligamento');
      }

    })
  }
  cadastrarMotivoDesligamento() {
    this.motivoDesligamentoService.post(this.motivodesligamento).subscribe({
      next: () => {
        this.toastr.success('Motivo cadastrado com sucesso!');
        this.router.navigate([this.listaDeMotivosDesligamentoUrl]);
      },
      error: (e) => {
        console.log('Erro ao cadatrar motivo de desligamento', e);
        this.toastr.error('Erro ao cadatrar motivo de desligamento');
      }
    });
  }
}
