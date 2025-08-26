import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/Cargo';
import { ToastrService } from 'ngx-toastr';
import SweetAlert2 from 'sweetalert2';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-listagem-cargo',
  templateUrl: './listagem-cargos.component.html',
  styleUrls: ['./listagem-cargos.component.css']
})

export class ListagemCargoComponent implements OnInit {
  faUserGear = faUserGear;
  cargos: Cargo[] = [];

  constructor(
    private cargoService: CargoService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregarCargos();
  }

  carregarCargos() {
    this.cargoService.getAll().subscribe({
      next: (cargos) => {
        this.cargos = cargos;
      },
      error: (error) => {
        console.error('Erro ao carregar cargos:', error);
        this.toastr.error('Erro ao carregar cargos.', 'Erro');
      }
    });
  }

  deletar(cargo: Cargo) {
    SweetAlert2.fire({
      title: `Tem certeza que deseja apagar o setor '${cargo.nome}'?`,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.cargoService.delete(cargo.id).subscribe({
          next: () => {
            this.toastr.success(`Cargo ${cargo.nome} apagado com sucesso!`);
            this.carregarCargos();
          },
          error: (e) => {
            console.log(e);
            this.toastr.error("Erro ao apagar o cargo " + cargo.nome);
          }
        });
      }
    });
  }
}
