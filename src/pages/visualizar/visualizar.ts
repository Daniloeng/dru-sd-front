import { DruServiceProvider } from '../../providers/dru-service/dru-service';
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
import { DRU } from '../../entity/dru';
import { Solicitacao } from '../../entity/Solicitacao';



@Component({
  selector: 'visualizar-page',
  templateUrl: 'visualizar.html',
  providers: [DruServiceProvider]
})

export class VisualizarPage {

  public registros: any;
  public loading: any;

  public usuarioLogado: any;
  public solicitacaoAtual: any;
  public retorno: any;
  public dru: any;


  public usuario_nome: string;
  public usuario_email: string;
  public usuario_endereco: string;
  public usuario_cpf: string;
  public usuario_telefone: string;
  public usuario_uf: string;
  public usuario_cidade: string;
  public usuario_id: string;
  public usuario_sexo: string;  

  public usuario_sexo_extenso: string;  
  public usuario_uf_extenso: string;


  constructor(public navCtrl: NavController,
    public druService: DruServiceProvider,
    public loadingController: LoadingController,
    public cookieService: CookieService,
    public toastCtrl: ToastController,
    public navParams: NavParams
  ) {
    this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
    this.solicitacaoAtual = this.navParams.get("solicitacao");
  }

  ionViewWillEnter() {

    this.loading.present();

    this.druService.getDRUbyCpf(this.solicitacaoAtual.solicitadoCpf).subscribe(
      response => {
        this.retorno = response;


        this.usuario_nome     = this.retorno.nome;
        this.usuario_email    = this.retorno.email;
        this.usuario_cidade   = this.retorno.cidade;
        this.usuario_cpf      = this.retorno.cpf;
        this.usuario_endereco = this.retorno.endereco;
        this.usuario_id       = this.retorno.id;
        this.usuario_sexo     = this.retorno.sexo;
        this.usuario_telefone = this.retorno.telefone;
        this.usuario_uf       = this.retorno.uf;


        switch (this.usuario_uf.toLowerCase()) {

          case "ac":
            this.usuario_uf_extenso = "Acre";
            break;

          case "al":
            this.usuario_uf_extenso = "Alagoas";
            break;

          case "am":
            this.usuario_uf_extenso = "Amazonas";
            break;

          case "ap":
            this.usuario_uf_extenso = "Amapá";
            break;

          case "ba":
            this.usuario_uf_extenso = "Bahia";
            break;

          case "ce":
            this.usuario_uf_extenso = "Cerá";
            break;

          case "df":
            this.usuario_uf_extenso = "Distrito Federal";
            break;

          case "es":
            this.usuario_uf_extenso = "Espírito Santo";
            break;

          case "go":
            this.usuario_uf_extenso = "Goias";
            break;

          case "ma":
            this.usuario_uf_extenso = "Maranhão";
            break;

          case "mg":
            this.usuario_uf_extenso = "Minas Gerais";
            break;

          case "ms":
            this.usuario_uf_extenso = "Mato Grosso do Sul";
            break;

          case "mt":
            this.usuario_uf_extenso = "Mato Grosso";
            break;

          case "pa":
            this.usuario_uf_extenso = "Pará";
            break;

          case "pb":
            this.usuario_uf_extenso = "Paraíba";
            break;

          case "pe":
            this.usuario_uf_extenso = "Pernambuco";
            break;

          case "pi":
            this.usuario_uf_extenso = "Piauí";
            break;

          case "pr":
            this.usuario_uf_extenso = "Paraná";
            break;

          case "rj":
            this.usuario_uf_extenso = "Rio de Janeiro";
            break;

          case "rn":
            this.usuario_uf_extenso = "Rio Grande do Norte";
            break;


          case "rr":
            this.usuario_uf_extenso = "Roraima";
            break;

          case "rs":
            this.usuario_uf_extenso = "Rio Grande do Sul";
            break;

          case "sc":
            this.usuario_uf_extenso = "Santa Catarina";
            break;

          case "se":
            this.usuario_uf_extenso = "Sergipe";
            break;

          case "sp":
            this.usuario_uf_extenso = "São Paulo";
            break;


          case "to":
            this.usuario_uf_extenso = "Tocantins";
            break;

          default:
            this.usuario_uf_extenso = "Brasil";
            break;
        }

        this.usuario_sexo_extenso = "Masculino";

        if ( this.usuario_sexo.toUpperCase() != "M" ) {
          this.usuario_sexo_extenso = "Feminino";
        }


        this.loading.dismiss();

        console.log(this.dru);
      },
      error => {
        this.loading.dismiss();
      }
    );

  }


  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }


}
