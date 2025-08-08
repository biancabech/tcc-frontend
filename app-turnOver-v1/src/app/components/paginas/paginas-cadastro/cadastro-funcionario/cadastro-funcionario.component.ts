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


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
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
    private toastr: ToastrService
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

  salvarFuncionario() {
    this.funcionarioService.post(this.funcionario).subscribe({
      next: () => {
        this.mensagemDeSucesso = 'Funcionário cadastrado com sucesso!';
        this.mensagemDeErro = 'erro';
      },
      error: (e) => {
        this.mensagemDeSucesso = '';
        if (e && e.error && e.error.message) {
          this.mensagemDeErro = 'Erro ao cadastrar funcionário: ' + e.error.message;
        } else if (e && e.status) {
          this.mensagemDeErro = `Erro ao cadastrar funcionário (status ${e.status})`;
        } else {
          this.mensagemDeErro = 'Erro ao cadastrar funcionário.';
        }
        console.error('Erro ao cadastrar funcionário:', e);
      }
    });
  }


  validarFormulario() {
    this.erros.clear();

    if (this.funcionario.nome.trim() === '') {
      this.erros.set('nome', 'O nome é obrigatório.');
    }
    if (this.funcionario.email.trim() === '') {
      this.erros.set('email', 'O email é obrigatório.');
    }
    if (this.endereco.rua.trim() === '') {
      this.erros.set('rua', 'A rua é obrigatória.');
    }
    if (this.endereco.bairro.trim() === '') {
      this.erros.set('bairro', 'O bairro é obrigatório.');
    }
    if (this.endereco.cidade.trim() === '') {
      this.erros.set('cidade', 'A cidade é obrigatória.');
    }
    if (this.endereco.estado.trim() === '') {
      this.erros.set('estado', 'O estado é obrigatório.');
    }
    if (this.endereco.cep.trim() === '') {
      this.erros.set('cep', 'O CEP é obrigatório.');
    }
    if (this.funcionario.cpf.trim() === '') {
      this.erros.set('cpf', 'O CPF é obrigatório.');
    }
    if (this.funcionario.dataAdmi.trim() === '') {
      this.erros.set('dataAdmi', 'A data de admissão é obrigatória.');
    }
    if (this.funcionario.dataNasci.trim() === '') {
      this.erros.set('dataNasci', 'A data de nascimento é obrigatória.');
    }
    if (this.funcionario.genero.trim() === '') {
      this.erros.set('genero', 'O gênero é obrigatório.');
    }
    if (this.funcionario.setorId.trim() === '') {
      this.erros.set('setorId', 'O setor é obrigatório.');
    }
    if (this.funcionario.cargoId.trim() === '') {
      this.erros.set('cargoId', 'O cargo é obrigatório.');
    }

    let deuErro = this.erros.size > 0;
    return deuErro;
  }
}
