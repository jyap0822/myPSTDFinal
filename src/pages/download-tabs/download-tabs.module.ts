import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadTabsPage } from './download-tabs';

@NgModule({
  declarations: [
    DownloadTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadTabsPage),
  ],
})
export class DownloadTabsPageModule {}
