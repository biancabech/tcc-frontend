import { Component } from '@angular/core';
import { ViacepService } from 'src/app/services/viacep.service';
import { ViacepResult } from 'src/app/models/ViacepResult';
import { ApiService } from 'src/app/services/api.service';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent {
  cep: string = '';
  endereco?: ViacepResult;
  mensagemDeErro: string = '';
  mensagemDeSucesso: string = '';
  funcionario: Funcionario = {
    nome: '',
    email: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  };

  constructor(private viacepService: ViacepService, private apiService: ApiService) { }

  buscarEnderecoPorCep(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.cep) {
      this.viacepService.getEnderecoByCep(this.cep).subscribe({
        next: (result) => {
          this.endereco = result;
          this.funcionario.rua = result.logradouro;
          this.funcionario.bairro = result.bairro;
          this.funcionario.cidade = result.localidade;
          this.funcionario.estado = result.uf;
          this.funcionario.cep = this.cep;
        },
        error: () => {
          this.endereco = undefined;
        }
      });
    }
  }

  salvarFuncionario() {
    this.apiService.post<Funcionario>('funcionario', this.funcionario).subscribe({
      next: () => {
        this.mensagemDeSucesso = 'Funcionário cadastrado com sucesso!';
        this.mensagemDeErro = '';
      },
      error: (error) => {
        this.mensagemDeSucesso = '';
        if (error && error.error && error.error.message) {
          this.mensagemDeErro = 'Erro ao cadastrar funcionário: ' + error.error.message;
        } else if (error && error.status) {
          this.mensagemDeErro = `Erro ao cadastrar funcionário (status ${error.status})`;
        } else {
          this.mensagemDeErro = 'Erro ao cadastrar funcionário.';
        }
        console.error('Erro ao cadastrar funcionário:', error);
      }
    });
  }
}
