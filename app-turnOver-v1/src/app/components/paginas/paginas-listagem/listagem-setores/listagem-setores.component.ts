import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBuilding, faDiagramProject, faLayerGroup, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Setor } from 'src/app/models/Setor';
import { SetorService } from 'src/app/services/setor.service';
import SweetAlert2 from 'sweetalert2';


@Component({
  selector: 'app-listagem-setores',
  templateUrl: './listagem-setores.component.html',
  styleUrls: ['./listagem-setores.component.css']
})
export class ListagemSetoresComponent implements OnInit {
  faNetworkWired = faNetworkWired;
  setores: Setor[] = [];

  constructor(
    private setorService: SetorService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.carregarSetores();
  }

  carregarSetores() {
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

  deletar(setor: Setor) {
    SweetAlert2.fire({
      title: `Tem certeza que deseja apagar o setor '${setor.nome}'?`,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.setorService.delete(setor.id).subscribe({
          next: () => {
            this.toastr.success(`Setor ${setor.nome} apagado com sucesso!`);
            this.carregarSetores();
          },
          error: (e) => {
            console.log(e);
            this.toastr.error("Erro ao apagar o setor " + setor.nome);
          }
        })
      }
    })
  }
}
