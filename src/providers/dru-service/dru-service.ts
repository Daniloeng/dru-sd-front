import { Observable } from 'rxjs/Observable';
import { Utils } from './../../entity/Utils';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DruServiceProvider {

  public druUrl:string;
  public handleError:any;

  constructor(public http: Http) {
    this.druUrl  = Utils.getUrlBackend() + "dru/";
  }

  public getDRU(cpf: any) {
    console.log('Buscando por ' + cpf + ' em ' + this.druUrl);
    return this.http.get(this.druUrl);
  }

}
