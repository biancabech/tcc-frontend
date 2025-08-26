import { Component } from '@angular/core';
import { Acompanhamento } from 'src/app/models/Acompanhamento';
import { ToastrService } from 'ngx-toastr';
import { CargoService } from 'src/app/services/cargo.service';
import { SetorService } from 'src/app/services/setor.service';
import { Cargo } from 'src/app/models/Cargo';
import { Setor } from 'src/app/models/Setor';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css']
})
export class AcompanhamentoComponent {
  listaDeAcompanhamentosUrl = '/paginas/paginas-listagem/listagem-acompanhamentos';
  acao = '';

  acompanhamento: Acompanhamento = {
    id: '',
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
    confirmacao: '',
    cargoId: '',
    setorId: '',
    cargo: {
      id: '',
      nome: ''
    },
    setor: {
      id: '',
      nome: ''
    },
  };

  acompanhamentos: Acompanhamento[] = [];
  cargos: Cargo[] = [];
  setores: Setor[] = [];
  erros: Map<string, string> = new Map<string, string>();
  mensagemDeSucesso: string = '';
  mensagemDeErro: string = '';

  constructor(
    private acompanhamentoService: AcompanhamentoService,
    private toastr: ToastrService,
    private cargoService: CargoService,
    private setorService: SetorService,
  ) { }

  ngOnInit(): void {
    this.carregarCargos();
    this.carregarSetores();
  }

  carregarCargos() {
    this.cargoService.getAll().subscribe(
      (cargos: Cargo[]) => {
        this.cargos = cargos;
      },
      (error) => {
        this.toastr.error('Erro ao carregar cargos', 'Erro');
      }
    );
  }

  carregarSetores() {
    this.setorService.getAll().subscribe(
      (setores: Setor[]) => {
        this.setores = setores;
      },
      (error) => {
        this.toastr.error('Erro ao carregar setores', 'Erro');
      }
    );
  }



  salvarAcompanhamento() {
    const validou = this.validarFormulario();
    // if (!validou) return;
    // if (this.acompanhamento.funcionarioId) {
    //   this.atualizarAcompanhamento();

    // }
    // porcentagem!: number;
    // calcularPorcentagem() {
    //   const totalCampos = 11; // Total de campos booleanos
    //   const camposPreenchidos = Object.values(this.acompanhamento).filter(value => value === true).length;
    //   this.porcentagem = (camposPreenchidos / totalCampos) * 100;


    //   if (this.porcentagem >= 80) {
    //     this.mensagemDeSucesso = 'Acompanhamento satisfatório!';
    //     this.mensagemDeErro = '';
    //   } else {
    //     this.mensagemDeErro = 'Acompanhamento insatisfatório, revisão necessária!';
    //     this.mensagemDeSucesso = '';
    //   }
    // }
  }
  validarFormulario() {
  }

  atualizarAcompanhamento() { }


}