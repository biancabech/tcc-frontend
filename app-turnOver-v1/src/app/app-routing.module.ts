import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './components/paginas/paginas-cadastro/cadastro-funcionario/cadastro-funcionario.component';
import { AcompanhamentoComponent } from './components/paginas/paginas-cadastro/cadastro-acompanhamento/acompanhamento.component';
import { DesligamentoComponent } from './components/paginas/paginas-cadastro/cadastro-desligamento/desligamento.component';
import { HomeComponent } from './components/paginas/home/home.component';
import { GraficoAnualComponent } from './components/paginas/dashboard/grafico-anual/grafico-anual.component';
import { FitCulturalComponent } from './components/paginas/paginas-cadastro/cadastro-fit-cultural/fit-cultural.component';
import { IaIndicaComponent } from './components/paginas/ia-indica/ia-indica.component';
import { CargoComponent } from './components/paginas/paginas-cadastro/cadastro-cargo/cargo.component';
import { SetorComponent } from './components/paginas/paginas-cadastro/cadastro-setor/setor.component';
import { ListagemFuncionariosComponent } from './components/paginas/paginas-listagem/listagem-funcionarios/listagem-funcionarios.component';
import { ListagemSetoresComponent } from './components/paginas/paginas-listagem/listagem-setores/listagem-setores.component';
import { ListagemFitCulturalComponent } from './components/paginas/paginas-listagem/listagem-fit-cultural/listagem-fit-cultural.component';
import { ListagemDesligamentosComponent } from './components/paginas/paginas-listagem/listagem-desligamentos/listagem-desligamentos.component';
import { ListagemAcompanhamentosComponent } from './components/paginas/paginas-listagem/listagem-acompanhamentos/listagem-acompanhamentos.component';
import { ListagemCargoComponent } from './components/paginas/paginas-listagem/listagem-cargos/listagem-cargos.component';
import { ListagemMotivoDesligamentoComponent } from './components/paginas/paginas-listagem/listagem-motivo-desligamento/listagem-motivo-desligamento/listagem-motivo-desligamento.component';
import { MotivoDesligamentoComponent } from './components/paginas/paginas-cadastro/cadastro-motivo-desligamento/cadastro-motivo-desligamento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paginas/dashboard/grafico-anual', component: GraficoAnualComponent },
  { path: 'paginas/ia-indica', component: IaIndicaComponent },
  //Componentes de Cadastro
  { path: 'paginas/paginas-cadastro/cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path: 'paginas/paginas-cadastro/cadastro-acompanhamento', component: AcompanhamentoComponent },
  { path: 'paginas/paginas-cadastro/cadastro-setor', component: SetorComponent },
  { path: 'paginas/paginas-cadastro/cadastro-cargo', component: CargoComponent },
  { path: 'paginas/paginas-cadastro/cadastro-fit-cultural', component: FitCulturalComponent },
  { path: 'paginas/paginas-cadastro/cadastro-desligamento', component: DesligamentoComponent },
  { path: 'paginas/paginas-cadastro/cadastro-motivo-desligamento', component: MotivoDesligamentoComponent },
  //Componentes de Listagem
  { path: 'paginas/paginas-listagem/listagem-funcionarios', component: ListagemFuncionariosComponent },
  { path: 'paginas/paginas-listagem/listagem-cargos', component: ListagemCargoComponent },
  { path: 'paginas/paginas-listagem/listagem-setores', component: ListagemSetoresComponent },
  { path: 'paginas/paginas-listagem/listagem-fit-cultural', component: ListagemFitCulturalComponent },
  { path: 'paginas/paginas-listagem/listagem-desligamentos', component: ListagemDesligamentosComponent },
  { path: 'paginas/paginas-listagem/listagem-acompanhamentos', component: ListagemAcompanhamentosComponent },
  { path: 'paginas/paginas-listagem/listagem-motivo-desligamento', component: ListagemMotivoDesligamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
