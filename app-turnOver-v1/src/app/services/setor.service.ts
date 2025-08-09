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

  get(id: string) {
    return this.http.get<Setor>(this.apiUrl + '/' + id);
  }

  post(funcionario: Setor): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }

  put(funcionario: Setor, id: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "/" + id, funcionario);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }
}




































