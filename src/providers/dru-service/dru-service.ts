import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Utils } from './../../entity/Utils';

/*
  Generated class for the DruServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DruServiceProvider {

  public druUrl:string;

  constructor(public http: Http) {
    this.druUrl  = Utils.getUrlBackend() + "dru/";
  }

  public getDRU(cpf: any) {
  console.log('Buscando por ' + cpf + ' em ' + this.druUrl);
  return this.http.get(this.druUrl);
  }

}
