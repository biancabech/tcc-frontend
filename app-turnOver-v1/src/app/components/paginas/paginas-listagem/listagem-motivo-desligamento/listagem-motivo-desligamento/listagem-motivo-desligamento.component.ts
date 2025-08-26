import { Component, OnInit } from '@angular/core';
import { MotivoDesligamentoService } from 'src/app/services/motivo-desligamento.service';
import { MotivoDesligamento } from 'src/app/models/MotivoDesligamento';
import { ToastrService } from 'ngx-toastr';
import SweetAlert2 from 'sweetalert2';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listagem-motivo-desligamento',
  templateUrl: './listagem-motivo-desligamento.component.html',
  styleUrls: ['./listagem-motivo-desligamento.component.css']
})

export class ListagemMotivoDesligamentoComponent implements OnInit {
  faUserGear = faUserGear;
  motivoDesligamentos: MotivoDesligamento[] = [];

  constructor(
    private motivoDesligamentoService: MotivoDesligamentoService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregarMotivosDesligamento();
  }

  carregarMotivosDesligamento() {
    this.motivoDesligamentoService.getAll().subscribe({
      next: (motivoDesligamentos) => {
        this.motivoDesligamentos = motivoDesligamentos;
      },
      error: (error) => {
        console.error('Erro ao carregar motivo de desligamentos:', error);
        this.toastr.error('Erro ao carregar motivo de desligamentos.', 'Erro');
      }
    })
  }

  deletar(motivoDesligamento: MotivoDesligamento) {
    SweetAlert2.fire({
      title: `Tem certeza que deseja apagar o motivo de desligamento '${motivoDesligamento.motivo}'?`,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.motivoDesligamentoService.delete(motivoDesligamento.id).subscribe({
          next: () => {
            this.toastr.success(`Motivo ${motivoDesligamento.motivo} apagado com sucesso!`);
            this.carregarMotivosDesligamento();
          },
          error: (e) => {
            console.log(e);
            this.toastr.error("Erro ao apagar o motivo " + motivoDesligamento.motivo);
          }
        });
      }
    });
  }
}