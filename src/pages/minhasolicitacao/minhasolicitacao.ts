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
  selector: 'minhasolicitacao-page',
  templateUrl: 'minhasolicitacao.html',
  providers: [SolicitacaoServiceProvider]
})

export class MinhaSolicitacaoPage {

  public solicitacoes: any;
  public loading: any;

  public hasFilter: boolean = false;
  public noFilter: any;

  public mostraSearchbar: boolean = false;
  public termoPesquisa: any;

  public situacao: string;
  public usuarioLogado: any;

  public usuario_cpf: string;

  public tituloToolBar: string = "Minhas Solicitações";


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

    this.solicitacoes = this.noFilter;
    this.loading.present();

    this.solicitacaoService.getMinhasSolicitacoes(this.usuario_cpf).subscribe(
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
      return (item.solicitadoCpf.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 ||
        item.solicitadoNome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 ||
        item.solicitadoEmail.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1);
    });
  }

  alternarSearchbar() {
    this.mostraSearchbar = !this.mostraSearchbar;
  }


}
