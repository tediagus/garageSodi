import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messsage',
  templateUrl: 'message.html'
})
export class MessagePage {

    messages: Object[];
    newMessage?: string;

    constructor( public params: NavParams) {
        this.messages =  this.params.data;
    }



    /* Simulation d'un envoie de message */
    sendMessage(){
        var date = new Date();

        this.messages.push( {"dtsaisie" : date ,"user":"test", "message" :this.newMessage });
        this.newMessage ="";
        return this.messages;

    }
}
