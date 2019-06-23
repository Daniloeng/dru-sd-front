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
    this.consultaUrl = Utils.getUrlBackend() + "consulta/";
  }

  public createCunsulta(authName: any, authCPF: any, authEmail: any, receivName: any, receivCPF: any){
    return this.http.post(this.consultaUrl + "authName="+ authName + "&authCPF="+ authCPF + "&authEmail="+ authEmail + "&receivName="+ receivName + "&receivCPF=" + receivCPF, {});
  }

  public approvConsulta(authCPF: any, receivCPF: any) {
    return this.http.post(this.consultaUrl +"aprov/authCPF="+ authCPF + "&receivCPF=" + receivCPF, {});
  }

  public desapprovConsulta(authCPF: any, receivCPF: any) {
    return this.http.post(this.consultaUrl +"desaprov/authCPF="+ authCPF + "&receivCPF=" + receivCPF, {});
  }

  public getConsultabyAuth(authCPF: any, approved: any) {
    return this.http.get(this.consultaUrl +"auth/authCPF="+ authCPF + "&approved=" + approved);
  }

  public getConsultabyReceiv(receivCPF: any, approved: any) {
    return this.http.get(this.consultaUrl +"receiv/receivCPF="+ receivCPF + "&approved=" + approved);
  }


/*
  Modelo de Consultar

  string AuthName
  string AuthCPF
  string AuthEmail
  string ReceivName
  string ReceivCPF
  bool Approved

  consulta/
  // Metodo para criar consulta
  CreateCunsulta(authName, authCPF authEmail, receivName, receivCPF)
  {
      AuthName = authName
      AuthCPF = authCPF
      AuthEmail = authEmail
      ReceivName = receivName
      ReceivCPF = receivCPF
      Approved = false
  }

  consulta/aprov/
  // Metodo para aprovar consulta
  ApprovConsulta(authCPF, receivCPF)
  {
    *encontra consulta com AuthCPF = authCPF e ReceivCPF = receivCPF*
    Approved = true
  }

  consulta/desaprov/
  // Metodo para desaprovar consulta
  DesapprovConsulta(authCPF, receivCPF)
  {
    *encontra consulta com AuthCPF = authCPF e ReceivCPF = receivCPF*
    *apaga consulta do banco*
  }


  consulta/auth/
  // Metodo para pegar minhas solicitacoes
  GetConsultaByAuth(authCPF, approved)
  {
    return Consultas com AuthCPF = authCPF e com Approved = approved
  }

  consulta/receiv/
  // Metodo para pegar minhas liberacoes
  GetConsultaByReceiv(receivCPF, approved)
  {
    return Consultas com ReceivCPF = receivCPF e com Approved = approved
  }




*/


}
