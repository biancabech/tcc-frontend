import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, of, switchMap } from "rxjs";

interface IaIndicaResponse {
  resultado: {
    result: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IaIndicaService {
  private apiUrl = `http://localhost:5432/api/IaIndica`;

  constructor(private http: HttpClient) { }

  async analisar() {
    const analise = await lastValueFrom(
      this.http.get<IaIndicaResponse>(this.apiUrl)
    );

    return analise.resultado.result
  }
}