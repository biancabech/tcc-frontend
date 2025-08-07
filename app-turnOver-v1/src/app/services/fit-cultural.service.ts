import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FitCultural } from '../models/FitCultural';
@Injectable({
  providedIn: 'root'
})
export class FitCulturalService {
  private apiUrl = `http://localhost:5432/api/FitCultural`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<FitCultural[]> {
    return this.http.get<FitCultural[]>(this.apiUrl);
  }

  post(fitCultural: FitCultural): Observable<FitCultural> {
    return this.http.post<FitCultural>(this.apiUrl, fitCultural);
  }

}