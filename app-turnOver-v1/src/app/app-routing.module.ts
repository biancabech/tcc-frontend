import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroFuncionarioComponent } from './components/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { AcompanhamentoComponent } from './components/funcionario/acompanhamento/acompanhamento.component';
import { DesligamentoComponent } from './components/desligamento/desligamento.component';
import { HomeComponent } from './components/home/home.component';
import { GraficoAnualComponent } from './components/dashboard/grafico-anual/grafico-anual.component';
import { FitCulturalComponent } from './components/funcionario/fit-cultural/fit-cultural.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard/grafico-anual', component: GraficoAnualComponent },
  { path: 'funcionario/cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path: 'funcionario/acompanhamento', component: AcompanhamentoComponent },
  { path: 'funcionario/fit-cultural', component: FitCulturalComponent },
  { path: 'desligamento', component: DesligamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
