import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public nav: NavController,
    private loginService: LoginServiceProvider,
    private cookieService: CookieService,
    private requestOptions: RequestOptions,
    public druService: DruServiceProvider,
) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaPage');
  }

  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }

  getInfo(){
  this.drus = []
  this.druService.getDRU(this.cpf).subscribe(
    response => { this.drus = response;     this.hasInfo = true;});
  console.log(this.drus)
  }

}
