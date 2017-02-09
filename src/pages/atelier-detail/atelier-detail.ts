import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-atelier-detail',
  templateUrl: 'atelier-detail.html'
})
export class AtelierDetailPage {
  selectedAtelier: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAtelier = navParams.get('item');
  }

  ionViewDidLoad(){

  }
  
}
