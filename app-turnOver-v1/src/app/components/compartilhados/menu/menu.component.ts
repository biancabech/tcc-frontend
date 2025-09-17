import { Component, OnInit } from '@angular/core';
import { Rotas } from 'src/app/rotas.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  readonly Rotas = Rotas

  constructor() { }

  ngOnInit(): void {
    this.ativarMenuAoCarregar();
  }

  ativarAoClicar(ev: MouseEvent) {
    const elementoClicado = ev.target as HTMLElement;
    const elementoAnterior = document.getElementsByClassName('active')[0];

    if (elementoAnterior) {
      elementoAnterior.classList.toggle('active');
    }

    const naoTemActive = !elementoClicado.classList.contains('active');
    if (naoTemActive) {
      elementoClicado.classList.toggle('active');
    }
  }

  ativarMenuAoCarregar() {
    const query = `a[routerlink="${location.pathname}"]`;
    const elemento = document.querySelector(query);

    if (elemento) {
      elemento.classList.toggle('active');
    }
  }
}
