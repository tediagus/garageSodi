import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-participant',
  templateUrl: 'participant.html'
})

export class ParticipantPage {
   atelier ;
    constructor( public params: NavParams) {
        this.atelier =  this.params.data;
    }
}
