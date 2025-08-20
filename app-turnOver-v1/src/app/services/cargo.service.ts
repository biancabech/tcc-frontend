import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../models/Cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private apiUrl = 'http://localhost:5432/api/Cargo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.apiUrl);
  }

  get(id: string) {
    return this.http.get<Cargo>(this.apiUrl + '/' + id);
  }

  post(funcionario: Cargo): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }

  put(funcionario: Cargo, id: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "/" + id, funcionario);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }
}




































