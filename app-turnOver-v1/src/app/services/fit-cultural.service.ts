import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FitCultural } from '../models/Fit-Cultural';
@Injectable({
  providedIn: 'root'
})
export class FitCulturalService {
  private apiUrl = `http://localhost:5432/api/FitCultural`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<FitCultural[]> {
    return this.http.get<FitCultural[]>(this.apiUrl);
  }

  get(id: string) {
    return this.http.get<FitCultural>(this.apiUrl + '/' + id);
  }

  post(fitCultural: FitCultural): Observable<FitCultural> {
    return this.http.post<FitCultural>(this.apiUrl, fitCultural);
  }

  put(fitCultural: FitCultural, id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.put<string>(this.apiUrl + "/" + id, { ...fitCultural, }).subscribe({
        next: resolve,
        error: (e) => {
          console.error('Erro ao atualizar fit cultural:', {
            erro: e,
            fitCultural: id,
          });
          reject(e);
        }
      })
    })
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + '/' + id);
  }
}