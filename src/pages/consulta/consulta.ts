import { ConsultaServiceProvider } from '../../providers/consulta-service/consulta-service';
import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { ContactPage } from './../contact/contact';

@Component({
  selector: 'consulta-page',
  templateUrl: 'consulta.html',
  providers: [ConsultaServiceProvider]
})
export class ConsultaPage {
  public registros: any;
  public loading:any;
  constructor(public navCtrl: NavController,
              public consultaService: ConsultaServiceProvider,
              public loadingController: LoadingController
              ) {
      this.loading=loadingController.create({content:'Aguarde...', showBackdrop:true, spinner:'bubbles'});
  }

  ionViewWillEnter() {
    this.registros = [];
    this.loading.present();
    this.consultaService.getRegistros().subscribe(
      response =>{ 
        this.registros = response;
        this.loading.dismiss();
      },
      error=> {
        this.loading.dismiss();
        console.warn(error);
      }
    );
  }

  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }  

}
