import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySolicitationPage } from './my-solicitation';

@NgModule({
  declarations: [
    MySolicitationPage,
  ],
  imports: [
    IonicPageModule.forChild(MySolicitationPage),
  ],
})
export class MySolicitationPageModule {}
