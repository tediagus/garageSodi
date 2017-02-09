import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { AtelierPage } from '../pages/atelier/atelier';
import { AgendaPage } from '../pages/agenda/agenda';
import { ProfilPage } from '../pages/profil/profil';


import { UserData } from "../providers/user-data";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make Homepage the root (or first) page
  rootPage: any = LoginPage; //HomePage
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public events: Events
    
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Les ateliers', component: AtelierPage },
      { title: 'Calendrier', component: AgendaPage },
      { title: 'Mon profil', component: ProfilPage },
    ];



  /*  this.userData.hasLoggedIn().then(hasLogged) =>{
      this.enableMenu(hasLoggedIn === true)
    }*/
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  //deconnexion de l'utilisateur
  deconnexionEvent(){
    
  }
}
