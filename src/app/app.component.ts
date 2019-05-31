import { RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ConsultaPage } from './../pages/consulta/consulta';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';


@Component({
  templateUrl: 'app.html'
})
export class ComponentInicial {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public requestOptions: RequestOptions,
    private cookieService: CookieService
  ) {

    this.initializeApp() 
    
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Consulta', component: ConsultaPage },
      { title: 'Perfil', component: PerfilPage }
    ];


    if (this.cookieService.getObject("usuarioAtual")) {
      this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
    }
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
