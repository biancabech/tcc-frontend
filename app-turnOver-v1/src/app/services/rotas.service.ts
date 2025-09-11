import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RotasService {
  home(removerBarraInicio: boolean = false) {
    return this.ajustar('/', removerBarraInicio)
  }

  dashboard(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/dashboard/grafico-anual', removerBarraInicio);
  }

  iaIndica(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/ia-indica', removerBarraInicio);
  }

  fitCultural(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/paginas-listagem/listagem-fit-cultural', removerBarraInicio);
  }

  listagemFuncionarios(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/paginas-listagem/listagem-funcionarios', removerBarraInicio);
  }

  listagemSetores(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/paginas-listagem/listagem-setores', removerBarraInicio);
  }

  listagemCargos(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/paginas-listagem/listagem-cargos', removerBarraInicio);
  }

  listagemDesligamentos(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/paginas-listagem/listagem-desligamentos', removerBarraInicio);
  }

  listagemMotivoDesligamento(removerBarraInicio: boolean = false) {
    return this.ajustar('/paginas/paginas-listagem/listagem-motivo-desligamento', removerBarraInicio);
  }

  private ajustar(rota: string, removerBarraInicio: boolean) {
    if (removerBarraInicio) return rota.substring(1, rota.length)

    return rota
  }
}
