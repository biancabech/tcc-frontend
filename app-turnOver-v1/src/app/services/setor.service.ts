import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setor } from '../models/Setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  private apiUrl = 'http://localhost:5432/api/Setor';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.apiUrl);
  }

  post(funcionario: Setor): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }
}




































