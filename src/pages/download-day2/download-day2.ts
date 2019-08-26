import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { SpeakerProvider } from "../../providers/speaker/speaker";
import { Download } from "../../models/download"
/**
 * Generated class for the DownloadDay2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-day2',
  templateUrl: 'download-day2.html',
})
export class DownloadDay2Page {

  downloads = [];


  constructor(private navCtrl: NavController, private navParams: NavParams, public menuCtrl: MenuController, public speakerProvider: SpeakerProvider, private modal: ModalController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewCanEnter() {
    this.loadDownload();
  }

  loadDownload() {
    this.speakerProvider.getDayTwoDownload().subscribe(data => this.downloads = data);
  }

  openLink(url) {
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  }

}