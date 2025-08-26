import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Acompanhamento } from 'src/app/models/Acompanhamento';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import SweetAlert2 from 'sweetalert2';

@Component({
  selector: 'app-listagem-acompanhamentos',
  templateUrl: './listagem-acompanhamentos.component.html',
  styleUrls: ['./listagem-acompanhamentos.component.css']
})
export class ListagemAcompanhamentosComponent implements OnInit {
  acompanhamentos: Acompanhamento[] = [];

  constructor(
    private acompanhamentoService: AcompanhamentoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.carregarAcompanhamentos();
  }

  carregarAcompanhamentos() {
    this.acompanhamentoService.getAll().subscribe({
      next: (acompanhamentos) => {
        this.acompanhamentos = acompanhamentos;
      },
      error: (error) => {
        console.error('Erro ao carregar setores:', error);
        this.toastr.error('Erro ao carregar setores.', 'Erro');
      }
    });
  }

  deletar() { }

  // Método para formatar data
  formatarData(dataString: string | undefined): string {
    // se não tem data, retorna string vazia
    if (!dataString) return '';

    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }

  // Método principal de filtro
  filtrarAcompanhamentos(): void {


  }

  // Método para contar resultados
  obterQuantidadeResultados() {

  }

  temResultados() { }
}
