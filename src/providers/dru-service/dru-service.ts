import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Utils } from './../../entity/Utils';

/*
  Generated class for the DruServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DruServiceProvider {

  private druUrl: string;
  public handleError: any;

  constructor(public http: HttpClient) {
    this.druUrl = Utils.getUrlBackend() + "dru/";
  }

  public getDRUbyCPF(cpf: any) {
    console.log((this.druUrl));
    return this.http.get(this.druUrl + cpf);
  }

  public getDRUList() {
    console.log((this.druUrl));
    return this.http.get(this.druUrl);
  }
}
