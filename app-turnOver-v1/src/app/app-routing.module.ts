import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './components/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { AcompanhamentoComponent } from './components/funcionario/acompanhamento/acompanhamento.component';
import { DesligamentoComponent } from './components/desligamento/desligamento.component';
import { HomeComponent } from './components/home/home.component';
import { GraficoAnualComponent } from './components/dashboard/grafico-anual/grafico-anual.component';
import { FitCulturalComponent } from './components/fit-cultural/fit-cultural.component';
import { IaIndicaComponent } from './components/ia-indica/ia-indica.component';
import { ListagemFuncionariosComponent } from './components/funcionario/listagem-funcionarios/listagem-funcionarios.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard/grafico-anual', component: GraficoAnualComponent },
  { path: 'ia-indica', component: IaIndicaComponent },
  { path: 'funcionario/cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path: 'funcionario/listagem-funcionarios', component: ListagemFuncionariosComponent },
  { path: 'funcionario/acompanhamento', component: AcompanhamentoComponent },
  { path: 'fit-cultural', component: FitCulturalComponent },
  { path: 'desligamento', component: DesligamentoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
