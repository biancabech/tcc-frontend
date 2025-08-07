import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ViacepResult } from '../models/ViacepResult';

@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  apiUrl: string = environment.viaCepUrl

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: String) {
    return this.http.get<ViacepResult>
      (this.apiUrl + cep + "/json/")
      .pipe(
        map((Response) => {
          return Response;
        })
      )
  }
}
