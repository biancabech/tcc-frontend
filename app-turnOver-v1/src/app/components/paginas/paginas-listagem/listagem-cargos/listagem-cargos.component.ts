import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/Cargo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listagem-cargo',
  templateUrl: './listagem-cargos.component.html',
  styleUrls: ['./listagem-cargos.component.css']
})

export class ListagemCargoComponent implements OnInit {
  cargos: Cargo[] = [];

  constructor(
    private cargoService: CargoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
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
}