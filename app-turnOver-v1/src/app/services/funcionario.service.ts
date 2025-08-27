import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';
import { somenteNumeros } from '../utils/somente-numeros';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `http://localhost:5432/api/Funcionario`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  getById(id: string) {
    return new Promise<Funcionario>((resolve, reject) => {
      this.http.get<Funcionario>(this.apiUrl + '/' + id).subscribe({
        next: resolve,
        error: (e) => {
          console.error('Erro ao buscar funcionario:', {
            erro: e,
            funcionarioId: id,
          });
          reject(e);
        }
      })
    })
  }

  async getByCpf(cpf: string) {
    try {
      return await lastValueFrom(
        this.http.get<Funcionario>(this.apiUrl + '/cpf/' + somenteNumeros(cpf))
      )
    } catch (e) {
      console.error('Erro ao buscar funcionario:', e);
      throw e;
    }

    // return new Promise<Funcionario>((resolve, reject) => {
    //   this.http.get<Funcionario>(this.apiUrl + '/cpf/' + somenteNumeros(cpf)).subscribe({
    //     next: resolve,
    //     error: (e) => {
    //       console.error('Erro ao buscar funcionario:', e);
    //       reject(e);
    //     }
    //   })
    // })
  }

  post(funcionario: Funcionario): Observable<string> {
    return this.http.post<string>(this.apiUrl, { ...funcionario, cpf: somenteNumeros(funcionario.cpf) });
  }

  put(funcionario: Funcionario, id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.put<string>(this.apiUrl + "/" + id, { ...funcionario, cpf: somenteNumeros(funcionario.cpf) }).subscribe({
        next: resolve,
        error: (e) => {
          console.error('Erro ao atualizar funcionario:', {
            erro: e,
            funcionarioId: id,
          });
          reject(e);
        }
      })
    })
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }
}




































