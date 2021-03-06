import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Atelier} from "../models/atelier";


/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AtelierService {

  garageApiRest = "http://localhost:3000/api";

  constructor(public http: Http) { }

  //recuperation de tout les utilisateurs
  load(): Observable<Atelier[]> {
      return this.http.get(`${this.garageApiRest}/ateliers`)
      .map(res => <Atelier[]>res.json());
  }
}
