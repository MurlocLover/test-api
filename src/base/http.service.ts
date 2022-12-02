import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ObjectMapper } from 'json-object-mapper';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  protected baseUrl: URL = new URL(environment.API);

  constructor(private http: HttpClient) { }

  public get(
    uri: string,
    options?: any,
    baseUrl?: string,
    ): Observable<any> {

      const opt = options ? { ...options, observe: 'response' } : { observe: 'response' };
      return new Observable<any>((observer) => {
        this.http.get(this.getEndpoint(uri, baseUrl), opt)
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (err) => observer.error(err)
        });
      });
    }

    public post(
      uri: string,
      params: any,
      baseUrl?: string
    ): Observable<any> {

      let body: any = null;
      body = this.setBody(params);

      return new Observable<any>((observer) => {
        const url = baseUrl ? `${baseUrl}${uri}` : this.getEndpoint(uri);
        this.http.post(url, body, this.getHeaders()).subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (err) => {
            observer.error(err);
          }
        })
      });
    }

    public put(
      uri: string,
      params: any,
      baseUrl?: string
      ): Observable<any> {

      let body: any = null;
      body = this.setBody(params);

      return new Observable<any>((observer) => {
        const url = baseUrl ? `${baseUrl}${uri}` : this.getEndpoint(uri);
        this.http
        .put(url, body, this.getHeaders())
        .subscribe({
          next: (response) => {
            observer.next(response);
            observer.complete();
          },
          error: (err) => {
            observer.error(err);
          }
        });
      });
    }

    delete(id: string): Observable<any> {
      return new Observable<any>(observer => {
        this.http
          .delete(this.getEndpoint(id))
          .subscribe((response) => {
            observer.next(response);
            observer.complete();
          })
      })
    }

    private setBody(params: any): any {
      if(typeof params === 'string') {
        return params;
      } else {
        let body = ObjectMapper.serialize(params);
        body = body.length > 1 ? body : params.toJSON();
        return body;
      }
    }

    private getHeaders() {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return  { headers };
    }

    private getEndpoint(path: string, baseUrl?: string) {
      return `${baseUrl ? baseUrl : this.baseUrl}${path}`;
    }

}
