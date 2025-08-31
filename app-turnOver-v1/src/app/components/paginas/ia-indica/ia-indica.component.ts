import { Component, OnInit } from '@angular/core';
import { faSquareBinary } from '@fortawesome/free-solid-svg-icons';
import { IaIndicaService } from 'src/app/services/ia-indica.service';

@Component({
  selector: 'app-ia-indica',
  templateUrl: './ia-indica.component.html',
  styleUrls: ['./ia-indica.component.css']
})
export class IaIndicaComponent {
  faSquareBinary = faSquareBinary;

  carregando = false;
  resultado = '';

  constructor(private iaIndicaService: IaIndicaService) { }

  async analisar() {
    try {
      this.carregando = true;
      this.resultado = await this.iaIndicaService.analisar();
    } catch (e) {
      // lançar o toaster avisando que deu erro
    } finally {
      this.carregando = false;
    }
  }
}
