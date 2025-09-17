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
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { Rotas } from './rotas.enum';

const routes: Routes = [
  { path: Rotas.Login, component: LoginComponent },
  { path: Rotas.Home, component: HomeComponent, canActivate: [authGuard] },
  { path: Rotas.Dashboard, component: GraficoAnualComponent, canActivate: [authGuard] },
  { path: Rotas.IaIndica, component: IaIndicaComponent, canActivate: [authGuard] },
  //Componentes de Cadastro
  { path: Rotas.CadastroFuncionario, component: CadastroFuncionarioComponent, canActivate: [authGuard] },
  { path: Rotas.CadastroAcompanhamento, component: AcompanhamentoComponent, canActivate: [authGuard] },
  { path: Rotas.CadastroSetor, component: SetorComponent, canActivate: [authGuard] },
  { path: Rotas.CadastroCargo, component: CargoComponent, canActivate: [authGuard] },
  { path: Rotas.CadastroFitCultural, component: FitCulturalComponent, canActivate: [authGuard] },
  { path: Rotas.CadastroDesligamento, component: DesligamentoComponent, canActivate: [authGuard] },
  { path: Rotas.CadastroMotivoDesligamento, component: MotivoDesligamentoComponent, canActivate: [authGuard] },
  //Componentes de Listagem
  { path: Rotas.ListagemFuncionarios, component: ListagemFuncionariosComponent, canActivate: [authGuard] },
  { path: Rotas.ListagemCargos, component: ListagemCargoComponent, canActivate: [authGuard] },
  { path: Rotas.ListagemSetores, component: ListagemSetoresComponent, canActivate: [authGuard] },
  { path: Rotas.ListagemFitCultural, component: ListagemFitCulturalComponent, canActivate: [authGuard] },
  { path: Rotas.ListagemDesligamentos, component: ListagemDesligamentosComponent, canActivate: [authGuard] },
  { path: Rotas.ListagemAcompanhamentos, component: ListagemAcompanhamentosComponent, canActivate: [authGuard] },
  { path: Rotas.ListagemMotivoDesligamento, component: ListagemMotivoDesligamentoComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
