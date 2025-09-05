import { Component } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sessaoService: SessaoService) { }

  deslogar() {
    this.sessaoService.finalizar();
  }

  avatar() {
    return this.sessaoService.usuario()?.avatar;
  }

  nomeUsuario() {
    return this.sessaoService.usuario()?.nome;
  }
}
