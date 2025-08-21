import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `http://localhost:5432/api/Funcionario`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  get(id: string) {
    return new Promise<Funcionario>((resolve, reject) => {
      this.http.get<Funcionario>(this.apiUrl + '/' + id).subscribe({
        next: resolve,
        error: (e) => {
          console.error('Erro ao buscar funcionario:', {
            erro: e,
            enderecoId: id,
          });
          reject(e);
        }
      })
    })
  }

  post(funcionario: Funcionario): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }

  put(funcionario: Funcionario, id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.put<string>(this.apiUrl + "/" + id, funcionario).subscribe({
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




































