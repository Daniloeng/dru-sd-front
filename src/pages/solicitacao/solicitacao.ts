import { SolicitacaoServiceProvider } from '../../providers/solicitacao-service/solicitacao-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { HomePage } from '../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { ContactPage } from '../contact/contact';

import { ToastController } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';

import { Solicitacao } from '../../entity/Solicitacao'

@Component({
  selector: 'solicitacao-page',
  templateUrl: 'solicitacao.html',
  providers: [SolicitacaoServiceProvider]
})

export class SolicitacaoPage {

  public solicitacoes: any;
  public loading: any;

  public hasFilter: boolean = false;
  public noFilter: any;

  public mostraSearchbar: boolean = false;
  public termoPesquisa: any;

  public situacao: string;
  public usuarioLogado: any;

  public usuario_cpf: string;


  public mostraNova: boolean = false;
  public mostraAutorizada: boolean = false;
  public mostraNegada: boolean = false;

  public tituloToolBar: string = "Solicitação";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public solicitacaoService: SolicitacaoServiceProvider,
    public loadingController: LoadingController,
    public toastCtrl: ToastController,
    public cookieService: CookieService,
  ) {

    this.situacao = navParams.get("situacao");
    this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });

    this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));
    this.usuario_cpf = this.usuarioLogado.cpf;

  }

  ionViewWillEnter() {

    switch (this.situacao.toUpperCase()) {
      case 'NOVA':
        this.tituloToolBar = "Solicitações a analisar";
        this.doSolicitacoesNovas();
        break;
      case 'AUTORIZADA':
        this.tituloToolBar = "Solicitações autorizadas";
        this.doSolicitacoesAprovadas();
        break;
      case 'NEGADA':
        this.tituloToolBar = "Solicitações negadas";
        this.doSolicitacoesNegadas();
        break;
      default:
        this.tituloToolBar = "Solicitações a analisar";
        this.doSolicitacoesNovas();
        break;
    }

  }


  doSolicitacoesNovas() {
    this.solicitacoes = this.noFilter;
    this.loading.present();

    this.tornarFalsaVariaveisMostrar();
    this.mostraNova = true;

    this.solicitacaoService.getSolicitacoesNovas(this.usuario_cpf).subscribe(
      response => {
        this.solicitacoes = response;
        this.loading.dismiss();

        this.noFilter = this.solicitacoes;
        this.hasFilter = false;
      },
      error => {
        this.loading.dismiss();
        console.warn(error);
      }
    );
  }



  doSolicitacoesAprovadas() {
    this.solicitacoes = this.noFilter;
    this.loading.present();

    this.tornarFalsaVariaveisMostrar();
    this.mostraAutorizada = true;

    this.solicitacaoService.getSolicitacoesAutorizadas(this.usuario_cpf).subscribe(
      response => {
        this.solicitacoes = response;
        this.loading.dismiss();

        this.noFilter = this.solicitacoes;
        this.hasFilter = false;
      },
      error => {
        this.loading.dismiss();
        console.warn(error);
      }
    );
  }


  doSolicitacoesNegadas() {
    this.solicitacoes = this.noFilter;
    this.loading.present();

    this.tornarFalsaVariaveisMostrar();
    this.mostraNegada = true;

    this.solicitacaoService.getSolicitacoesNegadas(this.usuario_cpf).subscribe(
      response => {
        this.solicitacoes = response;
        this.loading.dismiss();

        this.noFilter = this.solicitacoes;
        this.hasFilter = false;
      },
      error => {
        this.loading.dismiss();
        console.warn(error);
      }
    );
  }



  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }



  filtrarRegistros() {
    this.hasFilter = false;
    this.solicitacoes = this.noFilter.filter((item) => {
      return (item.solicitanteCpf.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 ||
        item.solicitanteNome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 ||
        item.solicitanteEmail.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1);
    });
  }

  alternarSearchbar() {
    this.mostraSearchbar = !this.mostraSearchbar;
  }



  autorizarConsulta(solicitacao: Solicitacao) {

    let toast = this.toastCtrl.create({
      message: "Autorizada consulta solicitada por " + solicitacao.solicitanteNome,
      duration: 6000,
      showCloseButton: true,
      closeButtonText: "FECHAR"
    });
    toast.present();

  }





  negarConsulta(solicitacao: Solicitacao) {

    let toast = this.toastCtrl.create({
      message: "Negada consulta solicitada por " + solicitacao.solicitanteNome,
      duration: 6000,
      showCloseButton: true,
      closeButtonText: "FECHAR"
    });
    toast.present();

  }


  tornarFalsaVariaveisMostrar() {
    this.mostraNova = false;
    this.mostraAutorizada = false;
    this.mostraNegada = false;
  }


}
