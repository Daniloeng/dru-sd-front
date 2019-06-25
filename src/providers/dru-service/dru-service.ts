import { Observable } from 'rxjs/Observable';
import { Utils } from './../../entity/Utils';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DruServiceProvider {

  private druUrl: string;
  public handleError: any;

  constructor(public http: HttpClient) {
    this.druUrl = Utils.getUrlBackend() + "dru/";
  }

  public getDRUbyId(id: any) {
    return this.http.get(this.druUrl + id);
  }

  public getDRUbyCpf(cpf: string) {
    return this.http.get(this.druUrl + cpf + "/cpf/");
  }

  public getDRUbyEmail(email: string) {
    return this.http.get(this.druUrl + email + "/email/");
  }

  public getDRUList() {
    return this.http.get(this.druUrl);
  }

}
