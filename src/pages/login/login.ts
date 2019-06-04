import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public nav: NavController,
        private loginService: LoginServiceProvider,
        private cookieService: CookieService,
        private requestOptions: RequestOptions,
        private loadingController:LoadingController
    ) {

        this.loginForm = formBuilder.group({
            email: [''],
            senha: ['']
        });
            this.loading=this.loadingController.create({content:'Aguarde...', showBackdrop:true,spinner:'bubbles'});
    }

    private loginUser(): void {
        this.loading.present();
        if (this.loginForm.valid) {
            this.loginService.login(this.loginForm.value).subscribe(
                res => {
                    this.loginSuccess(res);
                    this.loading.dismiss();
                }
            );
        } else {
            //this.loading.present();
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

    public redirectPage(res: any) {
        this.cookieService.putObject("usuarioAtual", res);
        this.navCtrl.setRoot(TabsPage);
    }

    redirectUser(response) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", response.access_token);
        this.cookieService.put("refreshToken", response.refresh_token);
    }


}
