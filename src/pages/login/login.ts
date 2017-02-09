import { Component } from '@angular/core';
import { NavController, LoadingController, Loading} from 'ionic-angular';
import { NgForm } from '@angular/forms';

import {AtelierPage} from '../atelier/atelier';
import { User } from "../../models/user";
import { UserService } from "../../providers/users-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
 
  loading :Loading
  identifiant?: string;
  password?: string ;

  constructor( public navCtrl: NavController, private userService: UserService, private loadingCtrl: LoadingController) { }

  /*Gestion de l'authentification*/
  loginEvent(UserService){
    this.showLoading();
    let login ={identifiant: this.identifiant, password:this.password};
    this.userService.login(login).subscribe(res =>{
        //TODO VERIFIER LA CONNEXION
        this.loading.dismiss();
        this.navCtrl.setRoot(AtelierPage)
      
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Veillez patienter...'
    });
    this.loading.present();
  }
}
