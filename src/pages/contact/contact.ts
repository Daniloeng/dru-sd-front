import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { AboutPage } from './../about/about';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public nav: NavController,
    private loginService: LoginServiceProvider,
    private cookieService: CookieService,
    private requestOptions: RequestOptions,
) {
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  doClickAbout() {
    this.navCtrl.setRoot(AboutPage);
  }

  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }

}