import { Observable } from 'rxjs/Observable';
import { Utils } from '../../entity/Utils';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Solicitacao } from '../../entity/Solicitacao';

@Injectable()
export class SolicitacaoServiceProvider {

    private solicitacaoUrl: string;

    private urlMinhasSolicitacoes: string;
    private urlSolicitacoesNovas: string;
    private urlSolicitacoesAutorizadas: string;
    private urlSolicitacoesNegadas: string;

    private urlSolicitarConsulta: string;

    private urlAutorizarConsulta: string;
    private urlNegarConsulta: string;


    public handleError: any;

    constructor(public http: HttpClient) {
        this.solicitacaoUrl = Utils.getUrlBackend() + "solicitacao/";
    }


    
    public getMinhasSolicitacoes(cpf: string) {
        this.urlMinhasSolicitacoes = this.solicitacaoUrl + cpf + "/cpf/";
        return this.http.get(this.urlMinhasSolicitacoes);
    }

    
    
    public getSolicitacoesNovas(cpf: string) {
        this.urlSolicitacoesNovas = this.solicitacaoUrl + cpf + "/novas/";
        return this.http.get(this.urlSolicitacoesNovas);
    }

   
    
    public getSolicitacoesAutorizadas(cpf: string) {
        this.urlSolicitacoesAutorizadas = this.solicitacaoUrl + cpf + "/autorizadas/";
        return this.http.get(this.urlSolicitacoesAutorizadas);
    }

  
    public getSolicitacoesNegadas(cpf: string) {
        this.urlSolicitacoesNegadas = this.solicitacaoUrl + cpf + "/negadas/";
        return this.http.get(this.urlSolicitacoesNegadas);
    }

  
    public geraSolicitacao(solicitacao: Solicitacao) {


        this.urlSolicitarConsulta = this.solicitacaoUrl + 
                                    solicitacao.solicitanteCpf + "/" +
                                    solicitacao.solicitadoCpf +  "/criar/"
        return this.http.get(this.urlSolicitarConsulta);

    }





    
    public getNegarSolicitacao(id: string) {
        this.urlNegarConsulta = this.solicitacaoUrl + id + "/negar/";
        return this.http.get(this.urlNegarConsulta);
    }

    
    
    public getAutorizarSolicitacao(id: string) {
        this.urlAutorizarConsulta = this.solicitacaoUrl + id + "/aprovar/";
        return this.http.get(this.urlAutorizarConsulta);
    }

 
 
}
