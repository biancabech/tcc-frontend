import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/Cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})

export class CargoComponent implements OnInit {
  listaDeCargosUrl = '/paginas/paginas-listagem/listagem-cargos';
  acao = '';

  cargo: Cargo = {
    id: '',
    nome: '',
  }

  erroValidacao: string | null = null;

  constructor(
    private cargoService: CargoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      // queryParam funciona como um Map
      this.cargo.id = queryParam.get('id') || ''; // se retornar null, assume string vazio

      this.acao = 'Cadatrar';

      if (this.cargo.id) {
        this.acao = 'Editar';
        this.buscarCargo();
      }
    })
  }

  buscarCargo() {
    this.cargoService.get(this.cargo.id).subscribe({
      next: (cargo) => {
        this.cargo = cargo;
      },
      error: (e) => {
        console.log(e);
        this.router.navigate([this.listaDeCargosUrl]);

        if (e.error.status == 404) {
          this.toastr.error('Cargo não encontrado');
        } else {
          this.toastr.error('Erro ao carregar o cargo');
        }
      }
    })
  }

  salvarCargo() {
    const validou = this.validarFormulario();
    if (!validou) return;

    if (this.cargo.id) {
      this.atualizarCargo();
    } else {
      this.cadastrarCargo();
    }
  }


  validarFormulario() {
    this.erroValidacao = null;
    if (this.cargo.nome.trim() === "") {
      this.erroValidacao = 'Nome do cargo é inválido'
    }
    let temErro = !this.erroValidacao;

    return temErro;
  }

  cadastrarCargo() {
    this.cargoService.post(this.cargo).subscribe({
      next: () => {
        this.toastr.success('Cargo cadastrado com sucesso!');
        this.router.navigate([this.listaDeCargosUrl]);
      },
      error: (e) => {
        console.log('Erro ao cadatrar cargo', e);
        this.toastr.error('Erro ao cadatrar cargo');
      }
    });
  }

  atualizarCargo() {
    this.cargoService.put(this.cargo, this.cargo.id).subscribe({
      next: () => {
        this.toastr.success('Cargo atualizado com sucesso!');
        this.router.navigate([this.listaDeCargosUrl]);
      },
      error: (e) => {
        console.log('Erro ao atualizar cargo', e);
        this.toastr.error('Erro ao atualizar cargo');
      }
    });
  }




}