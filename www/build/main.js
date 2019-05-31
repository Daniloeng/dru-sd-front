webpackJsonp([1],{

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/consulta/consulta.module": [
		295,
		0
	],
	"../pages/login/login.module": [
		165
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DruServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DruServiceProvider = (function () {
    function DruServiceProvider(http) {
        this.http = http;
        this.druUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "dru/";
    }
    DruServiceProvider.prototype.getDRU = function (cpf) {
        console.log('Buscando por ' + cpf + 'em ' + this.druUrl);
        return this.http.get(this.druUrl);
    };
    return DruServiceProvider;
}());
DruServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DruServiceProvider);

var _a;
//# sourceMappingURL=dru-service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_InterceptorHttpService__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_consulta_consulta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_login_service_login_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_dru_service_dru_service__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ComponentInicial */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_consulta_consulta__["a" /* ConsultaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ComponentInicial */], {}, {
                links: [
                    { loadChildren: '../pages/consulta/consulta.module#ConsultaPageModule', name: 'ConsultaPage', segment: 'consulta', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ComponentInicial */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_consulta_consulta__["a" /* ConsultaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__providers_InterceptorHttpService__["a" /* InterceptorHttpService */], multi: true
            },
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_dru_service_dru_service__["a" /* DruServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilServiceProvider = (function () {
    function PerfilServiceProvider(http) {
        this.http = http;
        this.perfilUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "perfil/";
    }
    PerfilServiceProvider.prototype.getPerfis = function () {
        console.log((this.perfilUrl));
        return this.http.get(this.perfilUrl);
    };
    return PerfilServiceProvider;
}());
PerfilServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
], PerfilServiceProvider);

//# sourceMappingURL=perfil-service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service_login_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InterceptorHttpService = (function () {
    function InterceptorHttpService(cookieService, loginService) {
        this.cookieService = cookieService;
        this.loginService = loginService;
    }
    InterceptorHttpService.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req.clone({
            setHeaders: { Authorization: 'Bearer ' + this.cookieService.get("accessToken") }
        })).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                switch (error.status) {
                    case 401:
                        return _this.getAccessToken(req, next);
                    case 0:
                        return _this.getAccessToken(req, next);
                }
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            }
        });
    };
    InterceptorHttpService.prototype.getAccessToken = function (req, next) {
        var _this = this;
        return this.loginService.getAccessToken(this.cookieService.get("refreshToken")).switchMap(function (resp) {
            _this.cookieService.put("accessToken", resp.access_token);
            console.log("Autorizado:" + resp.access_token);
            return next.handle(req.clone({
                setHeaders: { Authorization: 'Bearer ' + _this.cookieService.get("accessToken") }
            }));
        });
    };
    return InterceptorHttpService;
}());
InterceptorHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_0__login_service_login_service__["a" /* LoginServiceProvider */]])
], InterceptorHttpService);

//# sourceMappingURL=InterceptorHttpService.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentInicial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ComponentInicial = (function () {
    function ComponentInicial(platform, statusBar, splashScreen, requestOptions, cookieService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.requestOptions = requestOptions;
        this.cookieService = cookieService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
            { title: 'Consulta', component: __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */] }
        ];
        if (this.cookieService.getObject("usuarioAtual")) {
            this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        }
    }
    ComponentInicial.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    ComponentInicial.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return ComponentInicial;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Nav */])
], ComponentInicial.prototype, "nav", void 0);
ComponentInicial = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>DRU</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                {{p.title}}\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */],
        __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]])
], ComponentInicial);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = (function () {
    function PerfilPage(navCtrl, perfilService) {
        this.navCtrl = navCtrl;
        this.perfilService = perfilService;
    }
    PerfilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.perfis = [];
        this.perfilService.getPerfis().subscribe(function (response) { return _this.perfis = response; });
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'perfil-page',template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n\n\n\n\n    <ion-title>\n\n      Perfil\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Perfis</ion-list-header>\n\n    <ion-item *ngFor="let perfil of perfis">\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      {{perfil.nome}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\perfil\perfil.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__["a" /* PerfilServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_perfil_service_perfil_service__["a" /* PerfilServiceProvider */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.getUrlBackend = function () {
        //return "http://localhost:8080/";
        return "https://dru-server.herokuapp.com/";
        //return "/api/"
    };
    return Utils;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dru_service_dru_service__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultaPage = (function () {
    function ConsultaPage(navCtrl, druService) {
        this.navCtrl = navCtrl;
        this.druService = druService;
        this.hasInfo = false;
    }
    ConsultaPage.prototype.getInfo = function () {
        var _this = this;
        this.drus = [];
        this.druService.getDRU(this.cpf).subscribe(function (response) { _this.drus = response; _this.hasInfo = true; });
        console.log(this.drus);
    };
    return ConsultaPage;
}());
ConsultaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-consulta',template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\consulta\consulta.html"*/'<!--\n\n  Generated template for the ConsultaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n      <ion-buttons start>\n\n          <button ion-button (click)="doClickConsulta()">\n\n            <ion-icon name="contact"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Consulta\n\n        </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button (click)="doClickAbout()">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="!hasInfo">\n\n    <ion-item>\n\n      <ion-label position="floating">Buscar</ion-label>\n\n      <ion-input placeholder="CPF" [(ngModel)]="cpf" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button block (click)="getInfo()">\n\n      Buscar\n\n      </button>\n\n    </ion-item>\n\n  </div>\n\n  <div *ngIf="hasInfo">\n\n    <div class="user-photo" padding-top>\n\n      <ion-avatar>\n\n        <img [src]="\'/assets/images/noavatar.png\'">\n\n      </ion-avatar>\n\n    </div>\n\n\n\n    <div>\n\n      <ion-label>\n\n        <h2>Informções Principais</h2>\n\n      </ion-label>\n\n      <ion-list>\n\n        <ion-item *ngFor="let dru of drus">\n\n          <ion-icon name="person" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Nome</p>\n\n            <h2>{{dru.nome}}</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="cpf" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>CPF</p>\n\n            <h2>123.456.789-00</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="nasc" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Data de Nascimento</p>\n\n            <h2>00/00/00</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div>\n\n      <ion-label>\n\n        <h2>Contato</h2>\n\n      </ion-label>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon name="mail" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Email</p>\n\n            <h2>email@email.com</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="telef" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Telefone</p>\n\n            <h2>(00)1234-5678</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div>\n\n      <ion-label>\n\n        <h2>Afiliação</h2>\n\n      </ion-label>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon name="mail" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Nome da mãe</p>\n\n            <h2>nome nome nome</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="telef" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Nome do pai</p>\n\n            <h2>nome nome</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div>\n\n      <ion-label>\n\n        <h2>Documentação</h2>\n\n      </ion-label>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon name="mail" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Título de Eleitor</p>\n\n            <h2>1234567890</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="telef" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Passaporte</p>\n\n            <h2>1234567890</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="telef" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Registro SUS</p>\n\n            <h2>1234567890</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="telef" slot="start"></ion-icon>\n\n          <ion-label>\n\n            <p>Registro Geral</p>\n\n            <h2>1234567890</h2>\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\consulta\consulta.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_dru_service_dru_service__["a" /* DruServiceProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dru_service_dru_service__["a" /* DruServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dru_service_dru_service__["a" /* DruServiceProvider */]) === "function" && _b || Object])
], ConsultaPage);

var _a, _b;
//# sourceMappingURL=consulta.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, nav, loginService, cookieService, requestOptions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
        this.loginForm = formBuilder.group({
            email: [''],
            senha: ['']
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loginService.login(this.loginForm.value).subscribe(function (res) { return _this.loginSuccess(res); });
        }
        else {
            this.loading.present();
        }
    };
    LoginPage.prototype.loginSuccess = function (res) {
        var _this = this;
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", res.access_token);
        this.cookieService.put("refreshToken", res.refresh_token);
        this.loginService.getUsuarioAtual(res.access_token).subscribe(function (res) { return _this.redirectPage(res); });
    };
    LoginPage.prototype.redirectPage = function (res) {
        this.cookieService.putObject("usuarioAtual", res);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.redirectUser = function (response) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", response.access_token);
        this.cookieService.put("refreshToken", response.refresh_token);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\login\login.html"*/'<ion-content id="login">\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <div class="row responsive-md">\n\n      <div class="col col-50 col-offset-25">\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input #email formControlName="email" type="email" placeholder="Seu email" [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n\n          <p>Por favor coloque um email válido.</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Senha</ion-label>\n\n          <ion-input #password formControlName="senha" type="password" placeholder="Sua senha" [class.invalid]="!loginForm.controls.senha.valid && loginForm.controls.senha.dirty"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!loginForm.controls.senha.valid  && loginForm.controls.senha.dirty">\n\n          <p>Sua senha precisa conter pelo menos 6 caracteres</p>\n\n        </ion-item>\n\n\n\n        <button ion-button block type="submit">\n\n        Login\n\n      </button>\n\n        <button ion-button block clear (click)="goToSignup()">\n\n        <!--Criar uma nova conta  -->\n\n      </button>\n\n\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_login_service_login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__["CookieService"],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <!-->ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contacts"></ion-tab-->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    Esse é o projeto denominado "Documento de Registro Único (DRU) da disciplina de Sistemas Distruídos pela UNIFESP.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consulta_consulta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, cookieService, requestOptions) {
        this.navCtrl = navCtrl;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
    }
    HomePage.prototype.logout = function () {
        this.cookieService.removeAll();
        this.requestOptions.headers.set('Authorization', "Bearer ");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.pushPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__consulta_consulta__["a" /* ConsultaPage */]);
    };
    HomePage.prototype.doClickConsulta = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__consulta_consulta__["a" /* ConsultaPage */]);
    };
    HomePage.prototype.doClickPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__perfil_perfil__["a" /* PerfilPage */]);
    };
    HomePage.prototype.doClickAbout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n      <ion-buttons start>\n\n          <button ion-button (click)="doClickConsulta()">\n\n            <ion-icon name="contact"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Home\n\n        </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button (click)="doClickAbout()">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n<ion-content padding>\n\n  <h2>Seja bem vindo ao Projeto DRU de SD 2019!</h2>\n\n  <p>\n\n    Aqui é sua tela inicial.\n\n  </p>\n\n  <button ion-button color="primary" (click)="pushPage()">Consulta</button>\n\n\n\n  <button ion-button color="secondary" (click)="pushPage()">Alterar</button>\n\n\n\n  <button ion-button color="danger" (click)="logout()">Sair</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Renan Ruan\Documents\GitHub\dru-sd-front\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http, requestOptions) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "oauth/token?grant_type=password&username=";
        this.refreshUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "oauth/token?grant_type=refresh_token&refresh_token=";
        this.userUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "usuario/logado";
    }
    LoginServiceProvider.prototype.login = function (usuario) {
        this.loginUrl + usuario.email + "&password=" + encodeURIComponent(usuario.senha);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Authorization": "Basic " + btoa("cliente" + ':' + "123")
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.loginUrl + usuario.email + "&password=" +
            encodeURIComponent(usuario.senha), {}, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getUsuarioAtual = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': "Bearer " + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.requestOptions.headers.set('Authorization', "Bearer " + token);
        return this.http.get(this.userUrl, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getAccessToken = function (refreshToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Authorization": "Basic " + btoa("cliente" + ':' + "123")
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.refreshUrl + refreshToken, {}, options)
            .map(function (res) { return res.json(); });
    };
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map