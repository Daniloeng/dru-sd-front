import { PerfilServiceProvider } from './../../providers/perfil-service/perfil-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'perfil-page',
  templateUrl: 'perfil.html',
  providers: [PerfilServiceProvider]
})
export class PerfilPage {
  public perfis: any;
  private loading:any;
  constructor(public navCtrl: NavController,
              public perfilService: PerfilServiceProvider,
              public loadingController: LoadingController
              ) {

                this.loading= this.loadingController.create();

  }

  ionViewWillEnter() {
    this.perfis = [];
    this.loading.present();
    this.perfilService.getPerfis().subscribe(
      response => {
        this.perfis = response;
        this.loading.dismiss();          
                  },
      error=>{
        console.log(error);
        this.loading.dismiss();
      }
    );
  }

}
