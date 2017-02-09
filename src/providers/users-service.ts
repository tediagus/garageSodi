import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {User} from "../models/user";


/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  garageApiRest = "http://localhost:3000/api";

  constructor(public http: Http) { }

  //recuperation de tout les utilisateurs
  load(): Observable<User[]> {
      return this.http.get(`${this.garageApiRest}/users`)
      .map(res => <User[]>res.json());
  }


  //recuperation des parametre de connexion
  login(urlParam):Observable<User[]> {
    return this.http.post(`${this.garageApiRest}/login`,urlParam)
    .map(res => <User[]>res.json())
  }
}
