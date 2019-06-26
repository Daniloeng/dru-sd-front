import { PerfilPage } from './../pages/perfil/perfil';
import { InterceptorHttpService } from './../providers/InterceptorHttpService';
import { CookieService } from 'angular2-cookie/core';
import { Utils } from './../entity/Utils';
import { Http, HttpModule } from '@angular/http';
import { LoginPageModule } from './../pages/login/login.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Events } from 'ionic-angular';
import { ComponentInicial } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsultaPage } from '../pages/consulta/consulta';
import { ContactPage } from '../pages/contact/contact';

import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';
import { MinhaSolicitacaoPage } from '../pages/minhasolicitacao/minhasolicitacao';

import { AprovalPage } from '../pages/aproval/aproval';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';
import { MySolicitationPage } from './../pages/my-solicitation/my-solicitation';
import { MyAprovalPage } from './../pages/my-aproval/my-aproval';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DruServiceProvider } from '../providers/dru-service/dru-service';




@NgModule({
  declarations: [
    ComponentInicial,
    AboutPage,
    PerfilPage,
    HomePage,
    TabsPage,
    ConsultaPage,
    ContactPage,

    SolicitacaoPage,
    MinhaSolicitacaoPage

    AprovalPage,
   
    MyAprovalPage,
    MySolicitationPage,


  ],
  imports: [

  BrowserModule,
    HttpClientModule,
    HttpModule,
    LoginPageModule,
    IonicModule.forRoot(ComponentInicial)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentInicial,
    AboutPage,
    PerfilPage,
    HomePage,
    TabsPage,
    ConsultaPage,
    ContactPage,

    SolicitacaoPage,
    MinhaSolicitacaoPage

    AprovalPage,
 
    MyAprovalPage,
    MySolicitationPage,


  ],
  providers: [
    StatusBar,
    CookieService,
    SplashScreen,
    Utils,
    {
      provide:HTTP_INTERCEPTORS, useClass: InterceptorHttpService, multi: true
    }
    ,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider,
    DruServiceProvider,
    
  ]
})
export class AppModule {
  /*private usuarioOnLine = new Array<any>();

  setUsuarioOnline (usuario:any){
    this.usuarioOnLine = usuario;
  }*/

}
