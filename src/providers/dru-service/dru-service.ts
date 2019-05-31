import { Injectable } from '@angular/core';
import { Utils } from './../../entity/Utils';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DruServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DruServiceProvider {
  public druUrl:string;

  constructor(public http: Http) {
    this.druUrl  = Utils.getUrlBackend() + "dru";
  }

  public getDRU() {

  return this.http.get(this.druUrl, [])
    .map(res => res.json());

}

}
