import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAprovalPage } from './my-aproval';

@NgModule({
  declarations: [
    MyAprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAprovalPage),
  ],
})
export class MyAprovalPageModule {}
