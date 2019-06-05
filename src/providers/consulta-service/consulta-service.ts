import { Observable } from 'rxjs/Observable';
import { Utils } from './../../entity/Utils';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultaServiceProvider {

    private consultaUrl: string;
    public handleError: any;

    constructor(public http: HttpClient) {
        this.consultaUrl = Utils.getUrlBackend() + "dru/";
    }
    /// Nao deveria existir este consulta service. 
    // Deveria estar dentro do dru-service 
    public getRegistros() {
        console.log((this.consultaUrl));
        return this.http.get(this.consultaUrl);
    }


}
