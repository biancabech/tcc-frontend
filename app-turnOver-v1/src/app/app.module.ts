import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { CadastroFuncionarioComponent } from './components/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DesligamentoComponent } from './components/desligamento/desligamento.component';
import { FitCuturalComponent } from './components/fit-cutural/fit-cutural.component';
import { GraficoAnualComponent } from './dashboard/grafico-anual/grafico-anual.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    CadastroFuncionarioComponent,
    MenuComponent,
    HomeComponent,
    DesligamentoComponent,
    FitCuturalComponent,
    GraficoAnualComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [
    provideHttpClient(),
    DashboardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
