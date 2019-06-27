import { ConsultaServiceProvider } from '../../providers/consulta-service/consulta-service';
import { SolicitacaoServiceProvider } from '../../providers/solicitacao-service/solicitacao-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { ContactPage } from './../contact/contact';

import { ToastController } from 'ionic-angular';
import { DRU } from '../../entity/dru';
import { Solicitacao } from '../../entity/Solicitacao'


@Component({
  selector: 'consulta-page',
  templateUrl: 'consulta.html',
  providers: [ConsultaServiceProvider, SolicitacaoServiceProvider]
})

export class ConsultaPage {

  public registros: any;
  public loading: any;


  public hasFilter: boolean = false;
  public noFilter: any;

  public mostraSearchbar: boolean = false;
  public termoPesquisa: any;

  public usuarioLogado: any;
  public solicitacaoAtual: Solicitacao;
  public retorno: any;




  constructor(public navCtrl: NavController,
    public consultaService: ConsultaServiceProvider,
    public solicitacaoService: SolicitacaoServiceProvider,
    public loadingController: LoadingController,
    public cookieService: CookieService,
    public toastCtrl: ToastController
  ) {
    this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
  }

  ionViewWillEnter() {

    this.registros = this.noFilter;
    this.loading.present();

    this.consultaService.getRegistros().subscribe(
      response => {
        this.registros = response;
        this.loading.dismiss();

        this.noFilter = this.registros;
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




  apresentarToast(consultado: DRU): void {

    this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));
    this.solicitacaoAtual = new Solicitacao();

    this.solicitacaoAtual.solicitanteCpf = this.usuarioLogado.cpf;
    this.solicitacaoAtual.solicitanteNome = this.usuarioLogado.nome;
    this.solicitacaoAtual.solicitanteEmail = this.usuarioLogado.email;

    this.solicitacaoAtual.solicitadoCpf = consultado.cpf;
    this.solicitacaoAtual.solicitadoNome = consultado.nome;
    this.solicitacaoAtual.solicitadoEmail = consultado.email;



    this.solicitacaoService.geraSolicitacao(this.solicitacaoAtual).subscribe(
      response => {
        this.retorno = response;
      },
      error => {
        console.warn(error);
      }
    );

    let toast = this.toastCtrl.create({
      message: "Pedido enviado para " +  consultado.nome + " (" + consultado.email + ")",
      duration: 6000,
      showCloseButton: true,
      closeButtonText: "FECHAR"
    });
    
    toast.present(); 

  }




  filtrarRegistros() {
    this.hasFilter = false;
    this.registros = this.noFilter.filter((item) => {
      return (item.nome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 ||
        item.cpf.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1 ||
        item.email.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) > -1);
    });
  }

  
  alternarSearchbar() {
    this.mostraSearchbar = !this.mostraSearchbar;
  }

}
