import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acompanhamento } from '../models/Acompanhamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {
  private apiUrl = 'http://localhost:5432/api/Acompanhamento ';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Acompanhamento[]> {
    return this.http.get<Acompanhamento[]>(this.apiUrl);
  }

  get(id: string) {
    return this.http.get<Acompanhamento>(this.apiUrl + '/' + id);
  }

  post(funcionario: Acompanhamento): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }

  put(funcionario: Acompanhamento, id: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "/" + id, funcionario);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }
}
