import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "ionic-native";

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})


export class ProfilPage {
  
  public base64Image: string;

  constructor( public navCtrl: NavController) { }

  changePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth:1000,
      targetHeight:1000,
    }).then((imageData) => {

      this.base64Image = "data:image/jpeg;base64n" + imageData;
    }, (err) => {
       console.log(err);
    })

  }

}



