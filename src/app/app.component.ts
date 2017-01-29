import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { GarageListPage } from '../pages/garageList/garageList';
import { AgendaPage } from '../pages/agenda/agenda';
import { ProfilPage } from '../pages/profil/profil';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make Homepage the root (or first) page
  rootPage: any =HomePage; // LoginPage 
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Les ateliers', component: GarageListPage },
      { title: 'Calendrier', component: AgendaPage },
      { title: 'Mon profil', component: ProfilPage },
    ];
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
