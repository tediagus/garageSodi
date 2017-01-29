import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-garage-detail',
  templateUrl: 'garage-detail.html'
})
export class GarageDetailPage {
  selectedAtelier: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAtelier = navParams.get('item');
    console.log(this.selectedAtelier);
  }

  ionViewDidLoad(){

      console.log("Je suis atlier");
    }
  
}
