import { Component,ViewChild } from '@angular/core';
import { IonicPage,Tabs,MenuController} from 'ionic-angular';
import { SpeakerProvider } from "../../providers/speaker/speaker";

/**
 * Generated class for the DownloadTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-tabs',
  templateUrl: 'download-tabs.html',
})
export class DownloadTabsPage {
  
  @ViewChild('downloadTab') tabRef: Tabs;

  tab1Root: string;
  tab2Root: string;

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
    this.tab1Root = 'DownloadDay1Page';
    this.tab2Root = 'DownloadDay2Page';
  }

  ionViewDidEnter() {
    this.tabRef.select(0);
   }
}
