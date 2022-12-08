import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa.model';
import { ServiceAbstract } from 'src/base/service-abstract';
import { HttpService } from 'src/base/http.service';
import { environment } from '../environments/environment';
import { ObjectMapper } from 'json-object-mapper';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  createEntity(input: any): Pessoa {
    throw new Error('Method not implemented.');
  }

  API_URL: string = environment.API + 'Cliente/';


  constructor(private http: HttpClient) {
  }

  public getClientes() {
    return this.http.get(this.API_URL + 'GetCliente');
  }

  public saveCliente(id: string | number, model: Pessoa) {
    return this.http.post(`${this.API_URL + 'AddCliente'}`, model);
  }


}
