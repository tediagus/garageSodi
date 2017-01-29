import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GarageDetailPage} from "../garage-detail/garage-detail";

import { Atelier } from "../../models/atelier";
import { AtelierService } from "../../providers/atelier-service";
//import { MessagePage } from '../messages/message';

//import { MessageService } from "../../providers/message-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  ateliers: Atelier[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public atelierService: AtelierService) 
  {
     atelierService.load().subscribe(ateliers => {
       this.ateliers = ateliers;
     })
  }

  itemTapped(event, item) {
    this.navCtrl.push(GarageDetailPage, {item});
  }



  

/*  showMessageAtelier($event){

    let messages = this.MessageService.load($event);

    let modal = this.modalCtrl.create(MessagePage, messages);
    modal.present();
  }*/
}
