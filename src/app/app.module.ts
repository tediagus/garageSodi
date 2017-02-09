import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AtelierPage } from '../pages/atelier/atelier';
import { AtelierDetailPage } from '../pages/atelier-detail/atelier-detail';
import { ParticipantPage } from '../pages/participant/participant';
import { LoginPage } from '../pages/login/login';
import { ProfilPage } from '../pages/profil/profil';
import { MessagePage } from '../pages/messages/message';
import { AgendaPage } from '../pages/agenda/agenda';
import { AtelierService } from "../providers/atelier-service";
import { UserService } from '../providers/users-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AtelierPage,
    AtelierDetailPage,
    ProfilPage,
    MessagePage, 
    AgendaPage, 
    ParticipantPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilPage,
    AtelierPage,
    AtelierDetailPage,
    MessagePage, 
    AgendaPage, 
    ParticipantPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService, AtelierService]
})
export class AppModule {}
