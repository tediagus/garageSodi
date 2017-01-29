import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MessageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageService {

  messages ; 
  dataFile = '../assets/mock/atelier.json';

  constructor(public http: Http) {
    console.log('Hello MessageService Provider');
  }

  load($event)  {

    if (this.messages) {
      // already loaded data
      return Promise.resolve(this.messages);
    }

    return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get(`${this.dataFile}/$event`) 
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.messages = data.atelier;
        resolve(this.messages);
      });
  });
  }

}
