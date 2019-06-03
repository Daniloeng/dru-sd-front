import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { ContactPage } from './../contact/contact';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { DruServiceProvider } from './../../providers/dru-service/dru-service';



/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {

  public hasInfo: boolean = false;
  public drus: any;
  public cpf: any;
  public loading: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public nav: NavController,
    private loginService: LoginServiceProvider,
    private cookieService: CookieService,
    private requestOptions: RequestOptions,
    public druService: DruServiceProvider,
    public loadingController: LoadingController
  ) {
    this.loading = this.loadingController.create();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaPage');
    this.listarDRU();
  }

  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }

  getInfo() {
    this.drus = []
    
    this.loading.present();
    this.druService.getDRU(this.cpf).subscribe(
      response => { this.drus = response;
         this.hasInfo = true;
         this.loading.dismiss();
        },
      error => {console.warn(error  )},
      () => { this.loading.dismiss(); }
    );
    console.log(this.drus);
  }

  listarDRU() {


    this.drus = []

    this.loading.present();

    this.druService.ListarDRUS().subscribe(
      response => {
        this.drus = response; this.hasInfo = true; 
        console.log(JSON.stringify(this.drus));
        this.loading.dismiss();},
      error => {console.warn(error);
        this.loading.dismiss();
      }
    );
    
   }

}
