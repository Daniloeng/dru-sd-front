import { RequestOptions } from '@angular/http';
import { ComponentInicial } from './../../app/app.component';
import { LoginPage } from './../login/login';
import { CookieService } from 'angular2-cookie/core';
import { Component } from '@angular/core';
import { NavController, App, MenuController, LoadingController } from 'ionic-angular';
import { ConsultaPage } from './../consulta/consulta';
import { PerfilPage } from './../perfil/perfil';
import { AboutPage } from './../about/about';
import { ContactPage } from './../contact/contact';
import { DruServiceProvider } from '../../providers/dru-service/dru-service';
import { DRU } from '../../entity/dru';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DruServiceProvider]
})
export class HomePage {

  public registros: any = Object.keys;
  public noFilter: any;
  public hasFilter: boolean = false;
  public usuario_nome: string;
  public usuario_email: string;
  public usuario_endereco: string;
  public usuario_cpf: string;
  public usuario_telefone: string;
  public usuario_uf: string;
  public usuario_cidade: string;
  public usuario_id: string;
  public usuario_sexo: string;
  private loading: any;
  private usuarioLogado: any;

  constructor(public navCtrl: NavController, public cookieService: CookieService,
    public requestOptions: RequestOptions, private menuCtrl: MenuController,
    public druService: DruServiceProvider, public loadingController: LoadingController) {
    this.loading = this.loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
  }

  public logout() {
    this.cookieService.removeAll();
    this.requestOptions.headers.set('Authorization', "Bearer ");
    this.navCtrl.setRoot(LoginPage);

  }

  pushPage() {
    this.navCtrl.setRoot(ConsultaPage);
  }

  doClickConsulta() {
    this.navCtrl.setRoot(ConsultaPage);
  }

  doClickPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

  doClickAbout() {
    this.navCtrl.setRoot(AboutPage);
  }

  doClickContact() {
    this.navCtrl.setRoot(ContactPage);
  }

  doClickHome() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.registros = this.noFilter;
    this.loading.present();
    
    this.usuarioLogado = JSON.parse(this.cookieService.get("usuarioAtual"));

    this.druService.getDRUbyEmail(this.usuarioLogado.email).subscribe(
      response => {
        this.registros = response;

        this.usuario_nome     = this.registros.nome;
        this.usuario_email    = this.registros.email;
        this.usuario_cidade   = this.registros.cidade;
        this.usuario_cpf      = this.registros.cpf;
        this.usuario_endereco = this.registros.endereco;
        this.usuario_id       = this.registros.id;
        this.usuario_sexo     = this.registros.sexo;
        this.usuario_telefone = this.registros.telefone;
        this.usuario_uf       = this.registros.uf;

        this.loading.dismiss();
      },
      error => {
        this.loading.dismiss();
      }
    );
  }
}
