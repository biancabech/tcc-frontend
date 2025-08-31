import { Component, OnInit } from '@angular/core';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Desligamento } from 'src/app/models/Desligamento';
import { DesligamentoService } from 'src/app/services/desligamento.service';
import SweetAlert2 from 'sweetalert2';

@Component({
  selector: 'app-listagem-desligamentos',
  templateUrl: './listagem-desligamentos.component.html',
  styleUrls: ['./listagem-desligamentos.component.css']
})
export class ListagemDesligamentosComponent implements OnInit {
  faLinkSlash = faLinkSlash;
  desligamentos: Desligamento[] = [];

  constructor(
    private desligamentoService: DesligamentoService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.carregarDesligamentos();
  }

  carregarDesligamentos() {
    this.desligamentoService.getAll().subscribe({
      next: (desligamentos) => {
        this.desligamentos = desligamentos;
      },
      error: (error) => {
        console.error('Erro ao carregar desligamentos:', error);
        this.toastr.error('Erro ao carregar desligamentos.', 'Erro');
      }
    });
  }

  deletar(desligamento: Desligamento) {
    SweetAlert2.fire({
      title: `Tem certeza que deseja apagar o setor '${desligamento}'?`,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.desligamentoService.delete(desligamento.id).subscribe({
          next: () => {
            this.toastr.success(`Desligamento de ${desligamento.funcionario.nome} apagado com sucesso!`);
            this.carregarDesligamentos();
          },
          error: (e) => {
            console.log(e);
            this.toastr.error("Erro ao apagar o desligamento " + desligamento.funcionarioId);
          }
        })
      }
    })
  }

  // Método para formatar data
  formatarData(dataString: string | undefined): string {
    // se não tem data, retorna string vazia
    if (!dataString) return '';

    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }
}
