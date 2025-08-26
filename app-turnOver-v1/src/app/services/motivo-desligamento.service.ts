import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { MotivoDesligamento } from "../models/MotivoDesligamento";

@Injectable({
  providedIn: 'root'
})

export class MotivoDesligamentoService {
  private apiUrl = 'http://localhost:5432/api/MotivoDesligamento';

  constructor(
    private http: HttpClient) { }

  getAll(): Observable<MotivoDesligamento[]> {
    return this.http.get<MotivoDesligamento[]>(this.apiUrl);
  }

  get(id: string) {
    return this.http.get<MotivoDesligamento>(this.apiUrl + '/' + id);
  }

  post(motivoDesligamento: MotivoDesligamento): Observable<MotivoDesligamento> {
    return this.http.post<MotivoDesligamento>(this.apiUrl, motivoDesligamento);
  }

  put(fitCultural: MotivoDesligamento, id: string): Observable<MotivoDesligamento> {
    return this.http.put<MotivoDesligamento>(this.apiUrl + '/' + id, fitCultural);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + '/' + id);
  }
}