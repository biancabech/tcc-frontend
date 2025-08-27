import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {

  nomeBusca: string = '';
  cargoSelecionado: string = '';
  setorSelecionado: string = '';

  funcionarios: Funcionario[] = [];
  funcionariosFiltrados: Funcionario[] = [];
  cargos: string[] = [];
  setores: string[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.funcionarioService.getAll().subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
        this.inicializarDados();
        this.filtrarFuncionarios();
      },
      error: (error) => {
        console.error('Erro ao carregar funcionários:', error);
      }
    });
  }

  inicializarDados(): void {
    this.cargos = [...new Set(this.funcionarios.map(func => func.cargo.nome))].sort();
    this.setores = [...new Set(this.funcionarios.map(func => func.setor.nome))].sort();
  }

  filtrarFuncionarios(): void {
    this.funcionariosFiltrados = this.funcionarios.filter(funcionario => {
      const nomeCorresponde = funcionario.nome.toLowerCase().includes(this.nomeBusca.toLowerCase());
      const cargoCorresponde = !this.cargoSelecionado || funcionario.cargo.nome === this.cargoSelecionado;
      const setorCorresponde = !this.setorSelecionado || funcionario.setor.nome === this.setorSelecionado;
      return nomeCorresponde && cargoCorresponde && setorCorresponde;
    });
  }

  deletar(funcionario: Funcionario) {
    Swal.fire({
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

  limparFiltros(): void {
    this.nomeBusca = '';
    this.cargoSelecionado = '';
    this.setorSelecionado = '';
    this.filtrarFuncionarios();
  }

  formatarData(dataString: string | undefined): string {
    if (!dataString) return '';
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }

  obterClasseBadgeStatus(status: string): string {
    return status === 'Ativo' ? 'badge bg-success' : 'badge bg-secondary';
  }

  obterQuantidadeResultados(): number {
    return this.funcionariosFiltrados.length;
  }

  temResultados(): boolean {
    return this.funcionariosFiltrados.length > 0;
  }

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