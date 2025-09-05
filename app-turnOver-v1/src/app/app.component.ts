import { Component } from '@angular/core';
import { SessaoService } from './services/sessao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-turnOver-v1';

  constructor(private sessaoService: SessaoService) { }

  estaLogado() {
    return this.sessaoService.estaLogado()
  }
}
