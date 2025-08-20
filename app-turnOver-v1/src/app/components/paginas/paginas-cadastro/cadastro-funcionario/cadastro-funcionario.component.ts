import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/services/viacep.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Cargo } from 'src/app/models/Cargo';
import { Setor } from 'src/app/models/Setor';
import { SetorService } from 'src/app/services/setor.service';
import { CargoService } from 'src/app/services/cargo.service';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from 'src/app/models/Endereco';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  listaDeFuncionariosUrl = '/paginas/paginas-listagem/listagem-funcionarios';

  funcionario: Funcionario = {
    id: '',
    nome: '',
    genero: '',
    cpf: '',
    dataNasci: '',
    dataAdmi: '',
    dataDemi: '',
    email: '',
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
    enderecoId: '',
  };

  endereco: Endereco = {
    id: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  }

  cargos: Cargo[] = [];
  setores: Setor[] = [];
  erros: Map<string, string> = new Map<string, string>();
  mensagemDeErro: string = '';
  mensagemDeSucesso: string = '';

  constructor(
    private viacepService: ViacepService,
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private setorService: SetorService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cargoService.getAll().subscribe({
      next: (cargos) => {
        this.cargos = cargos;
      },
      error: (error) => {
        console.error('Erro ao carregar cargos:', error);
        this.toastr.error('Erro ao carregar cargos.', 'Erro');
      }
    });

    this.setorService.getAll().subscribe({
      next: (setores) => {
        this.setores = setores;
      },
      error: (error) => {
        console.error('Erro ao carregar setores:', error);
        this.toastr.error('Erro ao carregar setores.', 'Erro');
      }
    });
    this.salvarFuncionario();
  }

  limparEndereco() {
    this.endereco.rua = '';
    this.endereco.bairro = '';
    this.endereco.cidade = '';
    this.endereco.estado = '';
    this.endereco.cep = '';
    this.endereco.numero = '';
    this.endereco.complemento = '';
  }

  buscarEnderecoPorCep() {
    this.erros.delete('cep');

    this.viacepService.getEnderecoByCep(this.endereco.cep).subscribe({
      next: (result) => {
        if (result.erro) {
          this.limparEndereco()
          this.erros.set('cep', 'CEP inválido ou não encontrado');
        }
        this.endereco.rua = result.logradouro;
        this.endereco.bairro = result.bairro;
        this.endereco.cidade = result.localidade;
        this.endereco.estado = result.uf;
        this.endereco.cep = result.cep;
      },
      error: (error) => {
        console.error('Erro ao buscar CEP:', error);

        let erro = "CEP inválido ou não encontrado";

        this.limparEndereco();
        this.erros.set('cep', erro);
        this.toastr.error(erro, 'Erro');
      }
    });
  }

  editar() {
    this.funcionarioService.put(this.funcionario, 'id').subscribe({
      next: () => {
        this.mensagemDeSucesso = 'Funcionário atualizado com sucesso!';
        this.mensagemDeErro = 'erro';
      }
    });
  }

  salvarFuncionario() {
    this.funcionarioService.post(this.funcionario).subscribe({
      next: () => {
        this.toastr.success('Funcionário cadastrado com sucesso!');
        this.router.navigate([this.listaDeFuncionariosUrl]);
      },
      error: (error) => {
        console.error('Erro ao cadastrar funcionário:', error);
        this.toastr.error('Erro ao cadastrar funcionário.', 'Erro');
      }
    });
  }


  validarFormulario() {

  }
}
