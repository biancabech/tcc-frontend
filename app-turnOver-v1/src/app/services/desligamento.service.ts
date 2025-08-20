import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desligamento } from '../models/Desligamento';

@Injectable({
  providedIn: 'root'
})
export class DesligamentoService {
  private apiUrl = 'http://localhost:5432/api/Desligamento';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Desligamento[]> {
    return this.http.get<Desligamento[]>(this.apiUrl);
  }

  get(id: string) {
    return this.http.get<Desligamento>(this.apiUrl + '/' + id);
  }

  post(funcionario: Desligamento): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }
  put(funcionario: Desligamento, id: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "/" + id, funcionario);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }
}
