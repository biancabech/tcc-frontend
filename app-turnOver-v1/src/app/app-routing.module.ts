import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './components/paginas/paginas-cadastro/cadastro-funcionario/cadastro-funcionario.component';
import { AcompanhamentoComponent } from './components/paginas/paginas-cadastro/cadastro-acompanhamento/acompanhamento.component';
import { DesligamentoComponent } from './components/paginas/paginas-cadastro/cadastro-desligamento/desligamento.component';
import { HomeComponent } from './components/paginas/home/home.component';
import { GraficoAnualComponent } from './components/paginas/dashboard/grafico-anual/grafico-anual.component';
import { FitCulturalComponent } from './components/paginas/paginas-cadastro/cadastro-fit-cultural/fit-cultural.component';
import { IaIndicaComponent } from './components/paginas/ia-indica/ia-indica.component';
import { ListagemFuncionariosComponent } from './components/paginas/paginas-listagem/listagem-funcionarios/listagem-funcionarios.component';
import { CargoComponent } from './components/paginas/paginas-cadastro/cadastro-cargo/cargo.component';
import { SetorComponent } from './components/paginas/paginas-cadastro/cadastro-setor/setor.component';


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
  //Componentes de Listagem
  { path: 'paginas/paginas-listagem/listagem-funcionarios', component: ListagemFuncionariosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
