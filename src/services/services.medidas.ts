import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medidas } from '../model/medidas.model';
import { ServiceAbstract } from 'src/base/service-abstract';
import { HttpService } from 'src/base/http.service';
import { environment } from '../environments/environment';
import { ObjectMapper } from 'json-object-mapper';
import { map, Observable } from 'rxjs';
import { ModelAbstract } from 'src/base/model-abstract';
import { Pessoa } from '../model/pessoa.model';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {
  idMedidas: string;

  obterPorId(data){
    return this.http.post(`${this.API_URL}`,{idMedidas: data}).toPromise();
  }

  API_URL: string = environment.API + 'Cliente/GetMedida?Id=';

  constructor(private http: HttpClient) {
  }

  public getMedida(idMedidas: string) {
    return this.http.get(`${this.API_URL}${idMedidas}`);
  }


  public saveMedida(id: string | number, model: Medidas) {
    return this.http.post(`${this.API_URL + 'AddMedida'}`, model);
  }


}
