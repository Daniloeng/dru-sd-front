import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from './../pages/tabs/tabs';
import { ConsultaPage } from './../pages/consulta/consulta';
import { HomePage } from './../pages/home/home';
import { PerfilPage } from './../pages/perfil/perfil';
import { AboutPage } from './../pages/about/about';
import { ContactPage } from './../pages/contact/contact';


@Component({
  templateUrl: 'app.html'
})
export class ComponentInicial {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  usuarioOnLine = new Array<any>();

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public requestOptions: RequestOptions,
    private cookieService: CookieService
  ) {

    this.initializeApp()

    if (this.cookieService.getObject("usuarioAtual")) {
      this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
      this.usuarioOnLine = JSON.parse(this.cookieService.get("usuarioAtual"));
      this.rootPage = HomePage;
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

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

    logout() {
      this.cookieService.removeAll();
      this.requestOptions.headers.set('Authorization', "Bearer ");
      this.nav.setRoot(LoginPage);

    }


    doClickConsulta() {
      this.nav.setRoot(ConsultaPage);
    }


    doClickHome() {
      this.nav.setRoot(HomePage);
    }

    doClickPerfil() {
      this.nav.setRoot(PerfilPage);
    }

    doClickAbout() {
      this.nav.setRoot(AboutPage);
    }

    doClickContact() {
      this.nav.setRoot(ContactPage);
    }



}
