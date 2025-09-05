import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/services/login.service';
import { SessaoService } from 'src/app/services/sessao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = {
    usuario: '',
    senha: ''
  }

  constructor(
    private loginService: LoginService,
    private sessaoService: SessaoService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  async logar() {
    try {
      this.sessaoService.limpar();

      const usuario = await this.loginService.post(this.login);

      this.sessaoService.iniciar(usuario);

      this.toastr.success("Login realizado com sucesso!");
      this.router.navigate(["/"]);
    } catch (e: any) {
      this.toastr.error('Usuário ou senha incorretos');
    }
  }
}

