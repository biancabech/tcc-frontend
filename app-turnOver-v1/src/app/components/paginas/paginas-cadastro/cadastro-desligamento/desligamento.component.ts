import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/Cargo';
import { Setor } from 'src/app/models/Setor';
import { Desligamento } from 'src/app/models/Desligamento';
import { Funcionario } from 'src/app/models/Funcionario';
import { DesligamentoService } from 'src/app/services/desligamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SetorService } from 'src/app/services/setor.service';
import { MotivoDesligamento } from 'src/app/models/MotivoDesligamento';
import { MotivoDesligamentoService } from 'src/app/services/motivo-desligamento.service';

@Component({
  selector: 'app-desligamento',
  templateUrl: './desligamento.component.html',
  styleUrls: ['./desligamento.component.css']
})
export class DesligamentoComponent implements OnInit {
  faLinkSlash = faLinkSlash;
  listaDeDesligamentosUrl = '/paginas/paginas-listagem/listagem-desligamentos';
  acao = '';

  desligamento: Desligamento = {
    id: '',
    dataDesligamento: '',
    isGrave: '',
    funcionario: {
      id: '',
      cpf: '',
      nome: '',
      setor: {
        id: '',
        nome: '',
      },
      cargo: {
        id: '',
        nome: '',
      }
    },
    feedDesligamento: '',
    funcionarioId: '',
    motivoDesligamentoId: '',
    descricao: '',
  };

  busca: string = '';
  motivosDesligamentos: MotivoDesligamento[] = [];
  erroValidacao: string | null = null;

  constructor(
    private funcionarioService: FuncionarioService,
    private desligamentoService: DesligamentoService,
    private motivoDesligamentoService: MotivoDesligamentoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carregarmotivosDesligamentos();
    this.activatedRoute.queryParamMap.subscribe(async queryParam => {
      // queryParam funciona como um Map
      this.desligamento.id = queryParam.get('id') || ''; // se retornar null ou undefined, assume string vazio

      this.acao = 'Cadatrar';

      if (this.desligamento.id) {
        this.acao = 'Editar';
        await this.carregarDesligamento();
      }
    })
  }


  carregarmotivosDesligamentos() {
    this.motivoDesligamentoService.getAll().subscribe({
      next: (motivos) => {
        this.motivosDesligamentos = motivos;
      },
      error: (error) => {
        console.error('Erro ao carregar motivos de desligamento:', error);
        this.toastr.error('Erro ao carregar  motivos de desligamento.', 'Erro');
      }
    });
  }

  async carregarDesligamento() {
    try {
      this.desligamento = await this.desligamentoService.getById(this.desligamento.id);
      this.desligamento.dataDesligamento = this.desligamento.dataDesligamento?.split('T')?.at(0) || '';


    } catch (e: any) {
      this.router.navigate([this.listaDeDesligamentosUrl]);

      if (e.error.status == 404) {
        this.toastr.error('Desligamento não encontrado');
      } else {
        this.toastr.error('Erro ao carregar o desligamento');
      }
    }

  }



  salvarDesligamento() {
    const validou = this.validarFormulario();
    if (!validou) return;

    if (this.desligamento.id) {
      this.atualizarDesligamento();
    } else {
      this.cadastrarDesligamento();
    }
  }

  validarFormulario() {
    this.erroValidacao = null;
    if (this.desligamento.dataDesligamento.trim() === "") {
      this.erroValidacao = 'Data de desligamento é obrigatória';
      return false;
    }
    if (!this.desligamento.funcionarioId) {
      this.erroValidacao = 'Funcionário é obrigatório';
      return false;
    }
    if (!this.desligamento.motivoDesligamentoId) {
      this.erroValidacao = 'Motivo de desligamento é obrigatório';
      return false;
    }
    return true;
  }

  atualizarDesligamento() {
    this.desligamentoService.put(this.desligamento, this.desligamento.id).subscribe({

      next: () => {
        this.toastr.success('Desligamento atualizado com sucesso!');
        this.router.navigate([this.listaDeDesligamentosUrl]);
      },
      error: (e) => {
        console.log('Erro ao atualizar desligamento', e);
        this.toastr.error('Erro ao cadatrar desligamento');
      }
    });
  }



  cadastrarDesligamento() {
    console.log(this.desligamento);
    this.desligamentoService.post(this.desligamento).subscribe({
      next: () => {
        this.toastr.success('Desligamento cadastrado com sucesso!');
        this.router.navigate([this.listaDeDesligamentosUrl]);
      },
      error: (e) => {
        console.log('Erro ao cadastrar desligamento', e);
        this.toastr.error('Erro ao cadastrar desligamento');
      }
    });
  }

  async buscarFuncionarioCpf() {
    if (!this.desligamento.funcionario.cpf) {
      this.toastr.error('Digite o CPF para buscar o funcionário');
      return;
    }
    try {
      const result = await this.funcionarioService.getByCpf(this.desligamento.funcionario.cpf);
      this.desligamento.funcionario.nome = result.nome;
      this.desligamento.funcionarioId = result.id;
      this.desligamento.funcionario.cargo = result.cargo;
      this.desligamento.funcionario.setor = result.setor;
      this.desligamento.dataDesligamento = this.desligamento.dataDesligamento?.split('T')?.at(0) || '';
    } catch (e: any) {
      this.router.navigate([this.listaDeDesligamentosUrl]);
      if (e.error.status == 404) {
        this.toastr.error('Funcionário não encontrado');
      } else {
        this.toastr.error('Erro ao carregar o funcionário');
      }
    }
  }

}
