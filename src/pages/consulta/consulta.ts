import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { ConsultaServiceProvider } from '../../providers/consulta-service/consulta-service';
import { ContactPage } from './../contact/contact';
import { DruServiceProvider } from '../../providers/dru-service/dru-service';

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
              public druservice: DruServiceProvider,
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
