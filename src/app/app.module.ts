import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { GarageListPage } from '../pages/garageList/garageList';
import { GarageDetailPage } from '../pages/garage-detail/garage-detail';
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/messages/message';
import { AgendaPage } from '../pages/agenda/agenda';
import { AtelierService } from "../providers/atelier-service";
import { MessageService } from "../providers/message-service";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ItemDetailsPage,
    GarageListPage, 
    GarageDetailPage,
    MessagePage, 
    AgendaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ItemDetailsPage,
    GarageListPage, 
    GarageDetailPage,
    MessagePage, 
    AgendaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MessageService, AtelierService]
})
export class AppModule {}
