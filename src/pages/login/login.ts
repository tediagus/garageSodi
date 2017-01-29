import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AlertController} from 'ionic-angular'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    identifiant;
    password;

  constructor( public navCtrl: NavController, public alertCtrl: AlertController) { }

  /*Gestion de l'authentification*/
  loginEvent(){
      // recuperation du service login 
      if(this.identifiant == 'admin' && this.password =="admin"){
        // redirection vers la page d'accueil
       this.navCtrl.setRoot(HomePage);   
      }else {

        let alert = this.alertCtrl.create({
          title:'Avertissement',
          subTitle : "L'identifiant ou le mot de passe saisie sont incorrect",
          buttons:['Ok']
        })
        
        alert.present();
      }
  }
}
