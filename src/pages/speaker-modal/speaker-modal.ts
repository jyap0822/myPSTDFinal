import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speaker-modal',
  templateUrl: 'speaker-modal.html',
})
export class SpeakerModalPage {
  
  content: any[];

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    
    this.view.dismiss();
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    this.content = data;
    console.log(this.content);
  }

}
