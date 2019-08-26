import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { SpeakerProvider } from "../../providers/speaker/speaker";
import { Download } from "../../models/download"

/**
 * Generated class for the DownloadDay1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-day1',
  templateUrl: 'download-day1.html',
})
export class DownloadDay1Page {

  downloads = [];


  constructor(private navCtrl: NavController, private navParams: NavParams, public menuCtrl: MenuController, public speakerProvider: SpeakerProvider, private modal: ModalController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewCanEnter() {
    this.loadDownload();
  }

  loadDownload() {
    this.speakerProvider.getDayOneDownload().subscribe(data => this.downloads = data);
  }

  openLink(url) {
    console.log(url);
    window.open(url, '_system', 'location=yes');
    return false;
  }

}