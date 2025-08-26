import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/compartilhados/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CadastroFuncionarioComponent } from './components/paginas/paginas-cadastro/cadastro-funcionario/cadastro-funcionario.component';
import { MenuComponent } from './components/compartilhados/menu/menu.component';
import { HomeComponent } from './components/paginas/home/home.component';
import { DesligamentoComponent } from './components/paginas/paginas-cadastro/cadastro-desligamento/desligamento.component';
import { FitCulturalComponent } from './components/paginas/paginas-cadastro/cadastro-fit-cultural/fit-cultural.component';
import { GraficoAnualComponent } from './components/paginas/dashboard/grafico-anual/grafico-anual.component';
import { DashboardService } from './services/dashboard.service';
import { AcompanhamentoComponent } from './components/paginas/paginas-cadastro/cadastro-acompanhamento/acompanhamento.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraficoComponent } from './components/paginas/dashboard/grafico/grafico.component';
import { IaIndicaComponent } from './components/paginas/ia-indica/ia-indica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListagemFuncionariosComponent } from './components/paginas/paginas-listagem/listagem-funcionarios/listagem-funcionarios.component';
import { CargoComponent } from './components/paginas/paginas-cadastro/cadastro-cargo/cargo.component';
import { SetorComponent } from './components/paginas/paginas-cadastro/cadastro-setor/setor.component';
import { ListagemCargoComponent } from './components/paginas/paginas-listagem/listagem-cargos/listagem-cargos.component';
import { ListagemSetoresComponent } from './components/paginas/paginas-listagem/listagem-setores/listagem-setores.component';
import { ListagemFitCulturalComponent } from './components/paginas/paginas-listagem/listagem-fit-cultural/listagem-fit-cultural.component';
import { ListagemDesligamentosComponent } from './components/paginas/paginas-listagem/listagem-desligamentos/listagem-desligamentos.component';
import { HeaderComponent } from './components/compartilhados/header/header.component';
import { ListagemAcompanhamentosComponent } from './components/paginas/paginas-listagem/listagem-acompanhamentos/listagem-acompanhamentos.component';
import { MotivoDesligamentoComponent } from './components/paginas/paginas-cadastro/cadastro-motivo-desligamento/cadastro-motivo-desligamento.component';
import { ListagemMotivoDesligamentoComponent } from './components/paginas/paginas-listagem/listagem-motivo-desligamento/listagem-motivo-desligamento/listagem-motivo-desligamento.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CadastroFuncionarioComponent,
    MenuComponent,
    HomeComponent,
    DesligamentoComponent,
    FitCulturalComponent,
    GraficoComponent,
    GraficoAnualComponent,
    AcompanhamentoComponent,
    IaIndicaComponent,
    ListagemFuncionariosComponent,
    ListagemCargoComponent,
    CargoComponent,
    SetorComponent,
    ListagemSetoresComponent,
    ListagemFitCulturalComponent,
    ListagemDesligamentosComponent,
    HeaderComponent,
    ListagemAcompanhamentosComponent,
    MotivoDesligamentoComponent,
    ListagemMotivoDesligamentoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideHttpClient(),
    DashboardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
