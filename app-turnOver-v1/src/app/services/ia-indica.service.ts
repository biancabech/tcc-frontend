import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of, switchMap } from "rxjs";

export interface DeepSeekResponse {
  model: string,
  created_at: string,
  response: string,
  done: boolean
}

@Injectable({
  providedIn: 'root'
})
export class IaIndicaService {
  private apiUrl = `http://localhost:5432/api/IaIndica`;

  constructor(private http: HttpClient) { }

  async analisar() {
    const analise = await lastValueFrom(
      this.http.get<{ resultado: string }>(this.apiUrl)
    );

    return analise.resultado;
  }
}