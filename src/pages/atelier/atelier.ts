import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AtelierDetailPage} from "../atelier-detail/atelier-detail";

import { Atelier } from "../../models/atelier";
import { AtelierService } from "../../providers/atelier-service";
import { MessagePage } from '../messages/message';
import { ParticipantPage } from '../participant/participant';


@Component({
  selector: 'page-atelier',
  templateUrl: 'atelier.html'
})

export class AtelierPage {
  
  ateliers: Atelier[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public atelierService: AtelierService) 
  {
     atelierService.load().subscribe(ateliers => {
       this.ateliers = ateliers;
     })
  }

  itemTapped(event, item) {
    this.navCtrl.push(AtelierDetailPage, {item});
  }

  showMessageAtelier(event, atelier){
    let modal = this.modalCtrl.create(MessagePage,atelier.messages);
    modal.present();
  }

  showParticipantAtelier(event, atelier){
    console.log(atelier.title);
    let modal = this.modalCtrl.create(ParticipantPage, atelier);
    modal.present();
  }

}
