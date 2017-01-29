import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messsage',
  templateUrl: 'message.html'
})
export class MessagePage {

    messages: Object[];
    constructor( public params: NavParams) {
        this.messages =  this.params.data;
    }
}
