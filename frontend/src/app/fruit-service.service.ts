import { Fruit } from './fruit/fruit';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FruitServiceService {

  apiURL = '/api/food';

  constructor(private http: Http) { }

  getTastes() {
    return ['sweet', 'sour', 'boring', 'aweful', 'divine'];
  }

  getShapes() {
    return ['round', 'spiky', 'oval', 'cylinder', 'odd'];
  }
  getTypes() {
    return ['tropical', 'berry', 'moderate climate'];
  }

  submitFruit(fruit: Fruit): Observable<Fruit> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL, fruit, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  getFruits(): Observable<Fruit[]> {
    return this.http.get(this.apiURL)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
