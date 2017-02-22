import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../messages/message';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-atelier-detail',
  templateUrl: 'atelier-detail.html'
})
export class AtelierDetailPage {
  selectedAtelier: any;
  nbLike  = 0;

  constructor(public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAtelier = navParams.get('item');
  }

  ionViewDidLoad(){

  }
  
  like(){
    return this.nbLike ++;
  }

   showMessageAtelier(event, atelier){
    let modal = this.modalCtrl.create(MessagePage,atelier.messages);
    modal.present();
  }


}
