import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/Funcionario';


@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }


  // Propriedades para os filtros
  nomeBusca: string = '';
  cargoSelecionado: string = '';
  setorSelecionado: string = '';

  funcionariosFiltrados: Funcionario[] = [];
  cargos: string[] = [];
  setores: string[] = [];

  ngOnInit(): void {
    this.inicializarDados();
    this.filtrarFuncionarios();
  }

  // Método para inicializar listas de cargos e setores
  inicializarDados(): void {
    this.cargos = [...new Set(this.funcionarios.map(func => func.cargo.nome))].sort();
    this.setores = [...new Set(this.funcionarios.map(func => func.setor.nome
    ))].sort();
  }

  // Método principal de filtro
  filtrarFuncionarios(): void {
    this.funcionariosFiltrados = this.funcionarios.filter(funcionario => {
      const nomeCorresponde = funcionario.nome.toLowerCase().includes(this.nomeBusca.toLowerCase());
      const cargoCorresponde = !this.cargoSelecionado || funcionario.cargo.nome === this.cargoSelecionado;
      const setorCorresponde = !this.setorSelecionado || funcionario.setor.nome === this.setorSelecionado;

      return nomeCorresponde && cargoCorresponde && setorCorresponde;
    });
  }

  // Método para limpar filtros
  limparFiltros(): void {
    this.nomeBusca = '';
    this.cargoSelecionado = '';
    this.setorSelecionado = '';
    this.filtrarFuncionarios();
  }

  // Método para formatar data
  formatarData(dataString: string): string {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }

  // Método para obter classe do badge de status
  obterClasseBadgeStatus(status: string): string {
    return status === 'Ativo' ? 'badge bg-success' : 'badge bg-secondary';
  }

  // Método para contar resultados
  obterQuantidadeResultados(): number {
    return this.funcionariosFiltrados.length;
  }

  // Método para verificar se há resultados
  temResultados(): boolean {
    return this.funcionariosFiltrados.length > 0;
  }

  // Eventos de mudança nos filtros
  aoMudarNome(): void {
    this.filtrarFuncionarios();
  }

  aoMudarCargo(): void {
    this.filtrarFuncionarios();
  }

  aoMudarSetor(): void {
    this.filtrarFuncionarios();
  }
}
