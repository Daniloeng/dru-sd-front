import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  providers: [DruServiceProvider]
})
export class ConsultaPage {

  public hasInfo: boolean = false;
  public drus: any;

  constructor( public navCtrl: NavController, public druService: DruServiceProvider) {

  }

  getInfo(){
    this.drus = []
    this.druService.getDRU(this.cpf).subscribe(
      response => { this.drus = response;     this.hasInfo = true;});
    console.log(this.drus)
  }






}
