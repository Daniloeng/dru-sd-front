import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaSolicitacaoPage } from './minhasolicitacao';

@NgModule({
  declarations: [
    MinhaSolicitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhaSolicitacaoPage),
  ],
})
export class MinhaSolicitacaoPageModule {}
