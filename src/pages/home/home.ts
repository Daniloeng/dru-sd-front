import { RequestOptions } from '@angular/http';
import { ComponentInicial } from './../../app/app.component';
import { LoginPage } from './../login/login';
import { CookieService } from 'angular2-cookie/core';
import { Component } from '@angular/core';
import { NavController, App , MenuController} from 'ionic-angular';
import { ConsultaPage } from './../consulta/consulta';
import { PerfilPage } from './../perfil/perfil';
import { AboutPage } from './../about/about';
import { ContactPage } from './../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public cookieService: CookieService,
     public requestOptions:RequestOptions, private menuCtrl: MenuController) {

      
  }

  public logout() {
    this.cookieService.removeAll();
    this.requestOptions.headers.set('Authorization', "Bearer ");
    this.navCtrl.setRoot(LoginPage);

  }

  pushPage() {
    this.navCtrl.setRoot(ConsultaPage);
  }

  doClickConsulta() {
    this.navCtrl.setRoot(ConsultaPage);
  }

  doClickPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

  doClickAbout() {
    this.navCtrl.setRoot(AboutPage);
  }

  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }

  doClickHome() {
    this.navCtrl.setRoot(HomePage);
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    }



}
