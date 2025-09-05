import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/Login';
import { Usuario } from '../models/Usuario';
import { SessaoService } from './sessao.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5432/api/Login';

  constructor(
    private http: HttpClient,
  ) { }

  post(login: Login) {
    return new Promise<Usuario>((resolve, reject) => {
      this.http.post<any>(this.apiUrl, login).subscribe({
        next: resolve,
        error: (e) => {
          console.error('Erro ao salvar login', {
            erro: e,
          });
          reject(e);
        }
      })
    })
  }
}
