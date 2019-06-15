import { RequestOptions } from '@angular/http';
import { LoginPage } from './../login/login';
import { CookieService } from 'angular2-cookie/core';
import { Component } from '@angular/core';
import { NavController, App, MenuController, LoadingController } from 'ionic-angular';
import { ConsultaPage } from './../consulta/consulta';
import { PerfilPage } from './../perfil/perfil';
import { AboutPage } from './../about/about';
import { ContactPage } from './../contact/contact';
import { DruServiceProvider } from '../../providers/dru-service/dru-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DruServiceProvider]
})
export class HomePage {
  public usuarioOnLine = new Array<any>();

  public registros: any;
  private loading:any;
  public hasFilter: boolean = false;
  public noFilter: any;
  public mostraSearchbar: boolean = false;
  public termoPesquisa: any;

  constructor(
    public navCtrl: NavController,
    public cookieService: CookieService,
    public requestOptions: RequestOptions,
    private menuCtrl: MenuController,
    public druService: DruServiceProvider,
    public loadingController: LoadingController) {
    this.usuarioOnLine = JSON.parse(this.cookieService.get("usuarioAtual"));
    this.loading = loadingController.create({ content: 'Aguarde...', showBackdrop: true, spinner: 'bubbles' });
  }

  public logout() {
    this.cookieService.removeAll();
    this.requestOptions.headers.set('Authorization', "Bearer ");
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    this.usuarioOnLine;
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
    this.registros = this.noFilter;
    this.loading.present();

    this.druService.getDRUbyCPF("295.212.660-74").subscribe(
      response => {this.registros = response;this.loading.dismiss();this.noFilter = this.registros;this.hasFilter = false;},
      error => {this.loading.dismiss();console.warn(error);}
    );
  }

  filtrarDru() {
    this.hasFilter = false;
    this.registros = this.noFilter.filter((dru) => {
      return (
        dru.nome.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) ||
        dru.cpf.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) ||
        dru.email.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) ||
        dru.telefone.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) ||
        dru.cidade.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) ||
        dru.uf.toLowerCase().indexOf(this.termoPesquisa.toLowerCase()) ||
        dru.endereco.toLowerCase().indexOf(this.termoPesquisa.toLowerCase())
      );
    });
  }
}