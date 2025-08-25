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

  post(desligamento: Desligamento): Observable<string> {
    return this.http.post<string>(this.apiUrl, this.mapearValores(desligamento));
  }

  put(desligamento: Desligamento, id: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "/" + id, this.mapearValores(desligamento));
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }

  mapearValores(desligamento: Desligamento) {
    return {
      ...desligamento,
      isGrave: desligamento.isGrave == "true"
    }
  }
}
