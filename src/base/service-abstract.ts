import { ModelAbstract } from "./model-abstract";
import { Observable } from 'rxjs';
import { Response } from "./response";
import { HttpService } from './http.service';
import { map } from "rxjs/operators";
import { ObjectMapper } from 'json-object-mapper';


export abstract class ServiceAbstract <M extends ModelAbstract> {

  abstract createEntity(input: any): M;

  constructor(
    public endpoint: string,
    public http: HttpService,
    public baseUrl: string = ''
  ) {

  }

  getByIdm(idm: string): Observable<M> {
    return this.http
      .get(`${this.endpoint}/${idm}`, undefined, this.baseUrl)
      .pipe(
        map((res) => {
          return this.createEntity(res.body || {}) as M;
        })
      )
  }

  getById(id: string): Observable<M> {
    return this.http
      .get(`${this.endpoint}/${id}`, undefined, this.baseUrl)
      .pipe(
        map((res) => {
          return this.createEntity(res.body || {}) as M;
        })
      )
  }

  getAll(): Observable<Response<M[]>> {
    return this.http
      .get(`${this.endpoint}/getAll`, undefined, this.baseUrl)
      .pipe(
        map((res) => {
          const response = new Response<M[]>();
          response.rows = res.body.rows.map((e: M) => this.createEntity(e) as M);
          response.parameters = res.body.parameters;

          return response;
        })
      )
  }

  save(id: string | number, model: M) {
    const object = model;
    let _object: any = ObjectMapper.serialize(object);
    _object = _object.length > 1 ? _object : object.toJSON();

    const observer = (value: string | number) => {
      if(!value) {
        return this.http.post(`${this.endpoint}`, _object);
      }
      else {
        return this.http.put(`${this.endpoint}/${value}`, _object);
      }
    };

    return observer(id).pipe(map(response => response))
  }

  remove(id: string): Observable<Response<M>> {
    return this.http
      .delete(`${this.endpoint}/${id}`)
      .pipe(
        map((res) => {
          const response = new Response<any>();
          response.rows = this.createEntity(res.body || {}) as M;
          return response;
        })
      )
  }

}
