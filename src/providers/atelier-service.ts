import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import { Atelier } from "../models/atelier";

/*
  Generated class for the AtelierService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AtelierService {
  data;

  constructor(public http: Http) {
    console.log('Hello AtelierService Provider');
  }

  load():Observable<Atelier[]> {
    
      return  this.http.get('../assets/mock/atelier.json') 
          .map(res => <Atelier[]>res.json()); 
  }
}

