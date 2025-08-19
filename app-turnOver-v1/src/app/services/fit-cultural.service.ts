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

  put(fitCultural: FitCultural, id: string): Observable<FitCultural> {
    return this.http.put<FitCultural>(this.apiUrl + '/' + id, fitCultural);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + '/' + id);
  }
}