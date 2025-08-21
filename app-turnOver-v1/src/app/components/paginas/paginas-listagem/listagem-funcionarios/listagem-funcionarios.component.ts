import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { ToastrService } from 'ngx-toastr';
import SweetAlert2 from 'sweetalert2';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private toastr: ToastrService,
  ) { }


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
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.funcionarioService.getAll().subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
        this.funcionariosFiltrados = funcionarios;
        this.inicializarDados();
      },
      error: (error) => {
        console.error('Erro ao carregar funcionários:', error);
      }
    });
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

  deletar(funcionario: Funcionario) {
    SweetAlert2.fire({
      title: `Tem certeza que deseja apagar o funcionário '${funcionario.nome}'?`,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.funcionarioService.delete(funcionario.id).subscribe({
          next: () => {
            this.toastr.success(`Funcionário ${funcionario.nome} apagado com sucesso!`);
            this.carregarFuncionarios();
          },
          error: (e) => {
            console.log(e);
            this.toastr.error("Erro ao apagar o funcionário " + funcionario.nome);
          }
        });
      }
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
  formatarData(dataString: string | undefined): string {
    // se não tem data, retorna string vazia
    if (!dataString) return '';

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
