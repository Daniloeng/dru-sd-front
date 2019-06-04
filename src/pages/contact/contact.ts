import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { AboutPage } from './../about/about';
import { DruServiceProvider } from './../../providers/dru-service/dru-service';

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
  private loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public nav: NavController,
    public druservice:DruServiceProvider,
    public loadingController: LoadingController
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

  carregarDRU()
    {



    }
  

}