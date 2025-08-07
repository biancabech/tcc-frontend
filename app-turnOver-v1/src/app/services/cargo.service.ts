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

  post(funcionario: Cargo): Observable<string> {
    return this.http.post<string>(this.apiUrl, funcionario);
  }
}




































