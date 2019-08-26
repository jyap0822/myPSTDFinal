import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakersTabsPage } from './speakers-tabs';

@NgModule({
  declarations: [
    SpeakersTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakersTabsPage),
  ],
})
export class SpeakersTabsPageModule {}
