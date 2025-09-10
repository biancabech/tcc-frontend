import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FitCultural } from 'src/app/models/Fit-Cultural';
import { FitCulturalService } from 'src/app/services/fit-cultural.service';
import SweetAlert2 from 'sweetalert2';

@Component({
  selector: 'app-listagem-fit-cultural',
  templateUrl: './listagem-fit-cultural.component.html',
  styleUrls: ['./listagem-fit-cultural.component.css']
})
export class ListagemFitCulturalComponent implements OnInit {

  nomeBusca: string = '';
  avaliacoesFitCultural: FitCultural[] = [];
  constructor(
    private fitculturalService: FitCulturalService,
    private toastr: ToastrService,
  ) { }


  cargoSelecionado: string = '';
  setorSelecionado: string = '';

  fitFiltrados: FitCultural[] = [];
  cargos: string[] = [];
  setores: string[] = [];

  ngOnInit(): void {
    this.carregarFitCultural();

  }

  carregarFitCultural() {
    this.fitculturalService.getAll().subscribe({
      next: (avaliacoesFitCultural) => {
        this.avaliacoesFitCultural = avaliacoesFitCultural;
        this.fitFiltrados = avaliacoesFitCultural;
      },
      error: (error) => {
        console.error('Erro ao carregar fit cultural:', error);
        this.toastr.error('Erro ao carregar fit cultural.', 'Erro');
      }
    });
  }

  obterQuantidadeResultados(): number {
    return this.fitFiltrados.length;
  }

  // Método para verificar se há resultados
  temResultados(): boolean {
    return this.fitFiltrados.length > 0;
  }

  // Método principal de filtro
  filtrarFitCultural() {
    return this.avaliacoesFitCultural.filter((avaliacao) =>
      avaliacao.nome.toLowerCase().includes(this.nomeBusca.toLowerCase())
    );
  }

  aoMudarNome(): void {
    this.filtrarFitCultural();
  }


  deletar(fitCultural: FitCultural) {
    SweetAlert2.fire({
      title: `Tem certeza que deseja apagar o fit cultural '${fitCultural.nome}'?`,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.fitculturalService.delete(fitCultural.id).subscribe({
          next: () => {
            this.toastr.success(`Fit Cultural ${fitCultural.nome} apagado com sucesso!`);
            this.carregarFitCultural();
          },
          error: (e) => {
            console.log(e);
            this.toastr.error("Erro ao apagar o fit cultural " + fitCultural.nome);
          }
        });
      }
    });
  }

  // Método para formatar data
  formatarData(dataString: string | undefined): string {
    // se não tem data, retorna string vazia
    if (!dataString) return '';

    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }

}
