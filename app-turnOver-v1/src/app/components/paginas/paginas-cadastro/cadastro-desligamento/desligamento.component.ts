import { Component } from '@angular/core';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-desligamento',
  templateUrl: './desligamento.component.html',
  styleUrls: ['./desligamento.component.css']
})
export class DesligamentoComponent {
  faLinkSlash = faLinkSlash;
  listaDeDesligamentosUrl = '/paginas/paginas-listagem/listagem-setores';
}
