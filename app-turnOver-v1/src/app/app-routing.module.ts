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
import { RotasService } from './services/rotas.service';


const rotasService = new RotasService();

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: rotasService.home(true), component: HomeComponent, canActivate: [authGuard] },
  { path: rotasService.dashboard(true), component: GraficoAnualComponent, canActivate: [authGuard] },
  { path: rotasService.iaIndica(true), component: IaIndicaComponent, canActivate: [authGuard] },
  //Componentes de Cadastro
  { path: 'paginas/paginas-cadastro/cadastro-funcionario', component: CadastroFuncionarioComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-cadastro/cadastro-acompanhamento', component: AcompanhamentoComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-cadastro/cadastro-setor', component: SetorComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-cadastro/cadastro-cargo', component: CargoComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-cadastro/cadastro-fit-cultural', component: FitCulturalComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-cadastro/cadastro-desligamento', component: DesligamentoComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-cadastro/cadastro-motivo-desligamento', component: MotivoDesligamentoComponent, canActivate: [authGuard] },
  //Componentes de Listagem
  { path: rotasService.listagemFuncionarios(true), component: ListagemFuncionariosComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-listagem/listagem-cargos', component: ListagemCargoComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-listagem/listagem-setores', component: ListagemSetoresComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-listagem/listagem-fit-cultural', component: ListagemFitCulturalComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-listagem/listagem-desligamentos', component: ListagemDesligamentosComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-listagem/listagem-acompanhamentos', component: ListagemAcompanhamentosComponent, canActivate: [authGuard] },
  { path: 'paginas/paginas-listagem/listagem-motivo-desligamento', component: ListagemMotivoDesligamentoComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
