import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/services/viacep.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Cargo } from 'src/app/models/Cargo';
import { Setor } from 'src/app/models/Setor';
import { SetorService } from 'src/app/services/setor.service';
import { CargoService } from 'src/app/services/cargo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  listaDeFuncionariosUrl = '/paginas/paginas-listagem/listagem-funcionarios';
  acao = '';

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
    endereco: {
      id: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    }
  };

  cargos: Cargo[] = [];
  setores: Setor[] = [];
  erros: Map<string, string> = new Map<string, string>();
  erroValidacao: string | null = null;
  mensagemDeErro: string = '';
  mensagemDeSucesso: string = '';

  constructor(
    private viacepService: ViacepService,
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private setorService: SetorService,
    private enderecoService: EnderecoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carregarSetoresCargos();

    this.activatedRoute.queryParamMap.subscribe(async queryParam => {
      // queryParam funciona como um Map
      this.funcionario.id = queryParam.get('id') || ''; // se retornar null ou undefined, assume string vazio

      this.acao = 'Cadatrar';

      if (this.funcionario.id) {
        this.acao = 'Editar';
        await this.buscarFuncionarioPorId();
      }
    })
  }

  async buscarFuncionarioPorId() {
    try {
      this.funcionario = await this.funcionarioService.getById(this.funcionario.id);

      this.funcionario.dataNasci = this.funcionario.dataNasci?.split('T')?.at(0) || '';
      this.funcionario.dataDemi = this.funcionario.dataDemi?.split('T')?.at(0) || '';
      this.funcionario.dataAdmi = this.funcionario.dataAdmi?.split('T')?.at(0) || '';
    } catch (e: any) {
      this.router.navigate([this.listaDeFuncionariosUrl]);

      if (e.error.status == 404) {
        this.toastr.error('Funcionário não encontrado');
      } else {
        this.toastr.error('Erro ao carregar o funcionário');
      }
    }

    // this.funcionarioService.get(this.funcionario.id).subscribe({
    //   next: (funcionario) => {
    //     this.funcionario = funcionario;
    //   },
    //   error: (e) => {
    //     console.log(e);
    //     this.router.navigate([this.listaDeFuncionariosUrl]);

    //     if (e.error.status == 404) {
    //       this.toastr.error('Funcionário não encontrado');
    //     } else {
    //       this.toastr.error('Erro ao carregar o funcionário');
    //     }
    //   }
    // })
    // this.enderecoService.get(this.funcionario.endereco.id).subscribe({
    //   next: (endereco) => {
    //     this.funcionario.endereco = endereco;
    //   },
    //   error: (e) => {
    //     console.log(e);
    //     this.router.navigate([this.listaDeFuncionariosUrl]);
    //     if (e.error.status == 404) {
    //       this.toastr.error('Funcionário não encontrado');
    //     } else {
    //       this.toastr.error('Erro ao carregar o funcionário');
    //     }
    //   }
    // })
  }

  carregarSetoresCargos() {
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
    this.funcionario.endereco.cep = '';
    this.funcionario.endereco.rua = '';
    this.funcionario.endereco.numero = '';
    this.funcionario.endereco.complemento = '';
    this.funcionario.endereco.bairro = '';
    this.funcionario.endereco.cidade = '';
    this.funcionario.endereco.estado = '';
  }

  async buscarEnderecoPorCepNoViaCep() {
    this.erros.delete('cep');

    try {
      const result = await this.viacepService.getEnderecoByCep(this.funcionario.endereco.cep);

      this.funcionario.endereco.rua = result.logradouro;
      this.funcionario.endereco.bairro = result.bairro;
      this.funcionario.endereco.cidade = result.localidade;
      this.funcionario.endereco.estado = result.uf;
      this.funcionario.endereco.cep = result.cep;
    } catch (error: any) {
      console.error('Erro ao buscar CEP:', error);

      let erro = "CEP inválido ou não encontrado";

      this.limparEndereco();
      this.erros.set('cep', erro);
      this.toastr.error(erro, 'Erro');
    }

    // this.viacepService.getEnderecoByCep(this.funcionario.endereco.cep).subscribe({
    //   next: (result) => {
    //     if (result.erro) {
    //       this.limparEndereco()
    //       this.erros.set('cep', 'CEP inválido ou não encontrado');
    //       return;
    //     }
    //     this.funcionario.endereco.rua = result.logradouro;
    //     this.funcionario.endereco.bairro = result.bairro;
    //     this.funcionario.endereco.cidade = result.localidade;
    //     this.funcionario.endereco.estado = result.uf;
    //     this.funcionario.endereco.cep = result.cep;
    //   },
    //   error: (error) => {
    //     console.error('Erro ao buscar CEP:', error);

    //     let erro = "CEP inválido ou não encontrado";

    //     this.limparEndereco();
    //     this.erros.set('cep', erro);
    //     this.toastr.error(erro, 'Erro');
    //   }
    // });
  }

  salvarFuncionario() {
    const validou = this.validarFormulario();
    if (!validou) return;

    if (this.funcionario.id) {
      this.atualizarFuncionario();
    } else {

      this.cadastrarFuncionario();
    }
  }
  async atualizarFuncionario() {
    try {
      await this.funcionarioService.put(this.funcionario, this.funcionario.id);
      await this.enderecoService.put(this.funcionario.endereco, this.funcionario.enderecoId);

      this.toastr.success('Funcionário atualizado com sucesso!');
      this.router.navigate([this.listaDeFuncionariosUrl]);
    } catch (e: any) {
      this.toastr.error('Erro ao atualizar funcionário');
    }
  }

  validarFormulario() {
    this.erroValidacao = null;
    if (this.funcionario.nome.trim() === "") {
      this.erroValidacao = 'Nome é obrigatório';
      return false;
    }
    if (this.funcionario.cpf.trim() === "") {
      this.erroValidacao = 'CPF é obrigatório';
      return false;
    }
    if (this.funcionario.email.trim() === "") {
      this.erroValidacao = 'Email é obrigatório';
      return false;
    }
    if (!this.funcionario.cargoId) {
      this.erroValidacao = 'Cargo é obrigatório';
      return false;
    }
    if (!this.funcionario.setorId) {
      this.erroValidacao = 'Setor é obrigatório';
      return false;
    }
    return true;
  }

  cadastrarFuncionario() {
    this.enderecoService.post(this.funcionario.endereco).subscribe({
      next: (enderecoSalvo) => {
        this.funcionario.enderecoId = enderecoSalvo.id

        this.funcionarioService.post(this.funcionario).subscribe({
          next: () => {
            this.toastr.success('Funcionário cadastrado com sucesso!');
            this.router.navigate([this.listaDeFuncionariosUrl]);
          },
          error: (e) => {
            console.log('Erro ao cadastrar funcionário', e);
            this.toastr.error('Erro ao cadastrar funcionário');
          }
        });
      },
      error: (e) => {
        console.log('Erro ao cadastrar endereço', e);
        this.toastr.error('Erro ao cadastrar endereço');
      }
    });
  }


}
