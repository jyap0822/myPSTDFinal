import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SponsorsTabPage } from './sponsors-tab';

@NgModule({
  declarations: [
    SponsorsTabPage,
  ],
  imports: [
    IonicPageModule.forChild(SponsorsTabPage),
  ],
})
export class SponsorsTabPageModule {}
