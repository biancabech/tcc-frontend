import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Setor } from 'src/app/models/Setor';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})

export class SetorComponent implements OnInit {
  listaDeSetoresUrl = '/paginas/paginas-listagem/listagem-setores';

  acao = '';

  setor: Setor = {
    id: '',
    nome: '',
  }

  erroValidacao: string | null = null;

  constructor(
    private setorService: SetorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      // queryParam funciona como um Map
      this.setor.id = queryParam.get('id') || ''; // se retornar null ou undefined, assume string vazio

      this.acao = 'Cadatrar';

      if (this.setor.id) {
        this.acao = 'Editar';
        this.buscarSetor();
      }
    })
  }

  buscarSetor() {
    this.setorService.get(this.setor.id).subscribe({
      next: (setor) => {
        this.setor = setor;
      },
      error: (e) => {
        console.log(e);
        this.router.navigate([this.listaDeSetoresUrl]);

        if (e.error.status == 404) {
          this.toastr.error('Setor não encontrado');
        } else {
          this.toastr.error('Erro ao carregar o setor');
        }
      }
    })
  }

  salvarSetor() {
    const validou = this.validarFormulario();
    if (!validou) return;

    if (this.setor.id) {
      this.atualizarSetor();
    } else {
      this.cadastrarSetor();
    }
  }

  validarFormulario() {
    this.erroValidacao = null;
    if (this.setor.nome.trim() === "") {
      this.erroValidacao = 'Nome do setor é inválido'
    }

    let temErro = !this.erroValidacao;

    return temErro;
  }

  atualizarSetor() {
    this.setorService.put(this.setor, this.setor.id).subscribe({
      next: () => {
        this.toastr.success('Setor atualizado com sucesso!');
        this.router.navigate([this.listaDeSetoresUrl]);
      },
      error: (e) => {
        console.log('Erro ao atualizar setor', e);
        this.toastr.error('Erro ao cadatrar setor');
      }
    });
  }

  cadastrarSetor() {
    this.setorService.post(this.setor).subscribe({
      next: () => {
        this.toastr.success('Setor cadastrado com sucesso!');
        this.router.navigate([this.listaDeSetoresUrl]);
      },
      error: (e) => {
        console.log('Erro ao cadatrar setor', e);
        this.toastr.error('Erro ao cadatrar setor');
      }
    });
  }
}