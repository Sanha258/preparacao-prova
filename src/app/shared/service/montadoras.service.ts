import { HttpClient } from '@angular/common/http';
import { Montadora } from './../model/montadora';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor (private httpClient: HttpClient) {}
  private readonly API = 'http://localhost:8080/Senac-20241-backend-exemplos/rest/montadora';

  salvar(Montadora: Montadora): Observable<any> {
    return this.httpClient.post(this.API, Montadora);
  }

  listarTodas(): Observable<Array<any>> {
    return this.httpClient.get<Array<Montadora>>(this.API + '/todas');
  }


}
