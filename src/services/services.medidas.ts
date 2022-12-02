import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medidas } from '../model/medidas';
import { ServiceAbstract } from 'src/base/service-abstract';
import { HttpService } from 'src/base/http.service';
import { environment } from '../environments/environment';
import { ObjectMapper } from 'json-object-mapper';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  createEntity(input: any): Medidas {
    throw new Error('Method not implemented.');
  }

  API_URL: string = environment.API + 'Cliente/';


  constructor(private http: HttpClient) {
  }

  public getMedida() {
    return this.http.get(this.API_URL + 'GetMedida?');
  }

  public saveMedida(id: string | number, model: Medidas) {
    return this.http.post(`${this.API_URL + 'AddMedida'}`, model);
  }


}
