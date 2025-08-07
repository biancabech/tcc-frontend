import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `http://localhost:5432/api/Funcionario`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  post(funcionario: Funcionario): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }

  put(funcionario: Funcionario, id: string): Observable<string> {
    return this.http.put<string>(this.apiUrl + "/" + id, funcionario);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }

}




































