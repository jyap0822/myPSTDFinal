import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, ModalController} from 'ionic-angular';
import { SpeakerProvider } from "../../providers/speaker/speaker";
import { Speaker } from "../../models/speakers"

/**
 * Generated class for the SpeakersTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speakers-tabs',
  templateUrl: 'speakers-tabs.html',
})
export class SpeakersTabsPage {

  speakers = [];


  constructor(public menuCtrl: MenuController, public speakerProvider: SpeakerProvider, private modal: ModalController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewCanEnter() {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.speakerProvider.getSpeakers().subscribe(data => this.speakers = data);
  }

  openModal(data) {
    console.log(data);
    const myModal = this.modal.create('SpeakerModalPage', { data: data });

    myModal.present();
  }

}