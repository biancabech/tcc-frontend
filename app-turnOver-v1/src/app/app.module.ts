import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CadastroFuncionarioComponent } from './components/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DesligamentoComponent } from './components/desligamento/desligamento.component';
import { FitCulturalComponent } from './components/fit-cultural/fit-cultural.component';
import { GraficoAnualComponent } from './components/dashboard/grafico-anual/grafico-anual.component';
import { DashboardService } from './services/dashboard.service';
import { AcompanhamentoComponent } from './components/funcionario/acompanhamento/acompanhamento.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraficoComponent } from './components/grafico/grafico.component';
import { IaIndicaComponent } from './components/ia-indica/ia-indica.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListagemFuncionariosComponent } from './components/funcionario/listagem-funcionarios/listagem-funcionarios.component';


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
