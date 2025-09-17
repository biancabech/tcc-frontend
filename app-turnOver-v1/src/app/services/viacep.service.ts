import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ViacepResult } from '../models/ViacepResult';

@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  apiUrl: string = environment.viaCepUrl

  constructor(private http: HttpClient) { }

  async getEnderecoByCep(cep: String) {
    return new Promise<ViacepResult>((resolve, reject) => {
      this.http.get<ViacepResult>(this.apiUrl + cep + "/json/").subscribe({
        next: (result) => {
          if (result.erro) {
            return reject(new Error('CEP inválido ou não encontrado'));
          }

          resolve(result);
        },
        error: reject,
      });
    })


    // return this.http.get<ViacepResult>
    //   (this.apiUrl + cep + "/json/")
    //   .pipe(
    //     map((Response) => {
    //       return Response;
    //     })
    //   )
  }
}
