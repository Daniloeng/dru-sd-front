import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public loginForm;
    loading: any;
    usuarioOnLine = new Array<any>();

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public nav: NavController,
        private loginService: LoginServiceProvider,
        private cookieService: CookieService,
        private requestOptions: RequestOptions,
        private loadingController:LoadingController,
        private alertController:AlertController,
        private menuCtrl: MenuController
    ) {

        this.loginForm = formBuilder.group({
            email: [''],
            senha: ['']
        });
        
        this.loading=this.loadingController.create({content:'Aguarde...', showBackdrop:true,spinner:'bubbles'});
    }    

    private loginUser(): void {
        if (this.loginForm.valid) {
            this.loading.present();
            this.loginService.login(this.loginForm.value).subscribe(
                res => {
                    this.loading.present();
                    this.loading.dismiss();
                    this.loginSuccess(res);
                },
                err => {
                    this.loading.present();
                    this.loading.dismiss();
                    this.loginFailed(err);
                }
            );
        } else {
            this.loading.present();
            this.loading.dismiss();
        }
    }

    public loginSuccess(res: any) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", res.access_token);
        this.cookieService.put("refreshToken", res.refresh_token);
        this.loginService.getUsuarioAtual(res.access_token).subscribe(
            res => this.redirectPage(res)
        );
    }

    public loginFailed(err: any){
        this.cookieService.removeAll();
        this.navCtrl.setRoot(LoginPage);
        let msg = this.alertController.create({
            title: "Login",
            message: "E-mail ou senha incorretos!",
            buttons:[{text:"Fechar"}]
        });

        msg.present();
    }

    public redirectPage(res: any) {
        this.cookieService.putObject("usuarioAtual", res);
        this.usuarioOnLine = JSON.parse(this.cookieService.get("usuarioAtual"));
        this.navCtrl.setRoot(HomePage);
    }

    redirectUser(response) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", response.access_token);
        this.cookieService.put("refreshToken", response.refresh_token);
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
        }

}
