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

import { ToastController } from 'ionic-angular';



@Component({
  selector: 'consulta-page',
  templateUrl: 'consulta.html',
  providers: [ConsultaServiceProvider]
})

export class ConsultaPage {
  public registros: any;
  public loading:any;

  public hasFilter: boolean = false;
  public noFilter: any;

  public mostraSearchbar: boolean = false;


  constructor(public navCtrl: NavController,
              public consultaService: ConsultaServiceProvider,
              public loadingController: LoadingController,
              public toastCtrl: ToastController
              ) {
      this.loading=loadingController.create({content:'Aguarde...', showBackdrop:true, spinner:'bubbles'});
  }

  ionViewWillEnter() {

    this.registros = this.noFilter;
    this.loading.present();

    this.consultaService.getRegistros().subscribe(
      response =>{
        this.registros = response;
        this.loading.dismiss();

        this.noFilter = this.registros;
        this.hasFilter = false;

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



    apresentarToast(nome: String):void {
      let toast = this.toastCtrl.create({
        message: "Pedido enviado para " + nome,
        duration: 3000,
        showCloseButton: true,
        closeButtonText: "FECHAR"
      });
      toast.present();
    }


    filtrarRegistros() {
        this.hasFilter = false;
        this.registros = this.noFilter.filter((item) => {
            return (  item.nome.toLowerCase().indexOf(this.termoDePesquisa.toLowerCase()) > -1 ||
                      item.cpf.toLowerCase().indexOf(this.termoDePesquisa.toLowerCase()) > -1 ||
                      item.email.toLowerCase().indexOf(this.termoDePesquisa.toLowerCase()) > -1  );
        });
      }


      alternarSearchbar() {
          this.mostraSearchbar = !this.mostraSearchbar;
        }

}
