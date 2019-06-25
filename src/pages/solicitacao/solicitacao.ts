import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { ToastController } from 'ionic-angular';
import { ConsultaServiceProvider } from '../../providers/consulta-service/consulta-service';
import { CookieService } from 'angular2-cookie/core';


@IonicPage()
@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao.html',
    providers: [ConsultaServiceProvider],
})
export class SolicitacaoPage {
  public registros: any;
  public loading:any;

  public noFilter: any;
  public hasFilter: boolean = false;

  private usuarioLogado: any;
  public nomePesquisa: any;
  public cpfPesquisa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cookieService: CookieService, public loadingController: LoadingController, public toastCtrl: ToastController, public consultaService: ConsultaServiceProvider,) {
    this.loading=loadingController.create({content:'Aguarde...', showBackdrop:true, spinner:'bubbles'});
  }

  ionViewWillEnter() {

    this.registros = this.noFilter;
    this.loading.present();

    this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));

    this.consultaService.getConsultabyAuth(this.usuarioLogado.cpf, false).subscribe(
      response =>{
        this.registros = response;
        this.loading.dismiss();

        this.noFilter = this.registros;
        this.hasFilter = false;

      },
      error=> {
        this.loading.dismiss();
        console.warn(error);
      }
    );

  }

  solicitarConsulta(){
    this.consultaService.createCunsulta(this.usuarioLogado.nome, this.usuarioLogado.cpf, this.usuarioLogado.email, this.nomePesquisa, this.cpfPesquisa).subscribe(
      response =>{
        alert("Solicitação realizada com sucesso");

      },
      error=> {
        this.loading.dismiss();
        console.warn(error);
      }
    );
  }

}
