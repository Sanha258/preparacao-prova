import { Carro } from './../model/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor (private httpClient: HttpClient) {}
  private readonly API = 'http://localhost:8080/Senac-20241-backend-exemplos/rest/carro';

  salvar(Carro: Carro): Observable<any> {
    return this.httpClient.post(this.API, Carro);
  }

  consultar(id: number): Observable<any> {
    return this.httpClient.get<Carro>(this.API + '/' + id);
  }

  listarTodas(): Observable<Array<any>> {
    return this.httpClient.get<Array<Carro>>(this.API + '/todas');
  }


}
