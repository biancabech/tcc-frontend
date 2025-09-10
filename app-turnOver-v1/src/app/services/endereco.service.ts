import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private apiUrl = 'http://localhost:5432/api/Endereco';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.apiUrl);
  }

  get(id: string) {
    return new Promise<Endereco>((resolve, reject) => {
      this.http.get<Endereco>(this.apiUrl + '/' + id)
        .subscribe({
          next: resolve,
          error: (e) => {
            console.error('Erro ao buscar endereço do funcionario:', {
              erro: e,
              enderecoId: id,
            });
            reject(e);
          }
        })
    })
  }

  post(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.apiUrl, endereco);
  }

  put(endereco: Endereco, id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.put<string>(`${this.apiUrl}/${id}`, endereco).subscribe({
        next: resolve,
        error: (e) => {
          console.error('Erro ao atualizar endereço:', {
            erro: e,
            enderecoId: id,
          });
          reject(e);
        }
      });
    })
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }
}
