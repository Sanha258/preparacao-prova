import { Vacina } from './../model/vacina';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"root"
})

export class VacinaService {
  constructor (private httpClient: HttpClient) {}
  private readonly API = 'http://localhost:8080/Senac-backend2024.1--William/rest/vacina';

  salvar(Vacina: Vacina): Observable<any> {
    return this.httpClient.post(this.API, Vacina);
  }
}
