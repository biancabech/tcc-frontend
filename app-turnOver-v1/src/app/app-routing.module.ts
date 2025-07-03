import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroFuncionarioComponent } from './components/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { AcompanhamentoComponent } from './components/funcionario/acompanhamento/acompanhamento.component';
import { DesligamentoComponent } from './components/desligamento/desligamento.component';
import { HomeComponent } from './components/home/home.component';
import { GraficoAnualComponent } from './dashboard/grafico-anual/grafico-anual.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroFuncionarioComponent },
  { path: 'acompanhamento', component: AcompanhamentoComponent },
  { path: 'desligamento', component: DesligamentoComponent },
  { path: 'dashboard/grafico-anual', component: GraficoAnualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
