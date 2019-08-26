import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SponsorsKnowledgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsors-knowledge',
  templateUrl: 'sponsors-knowledge.html',
})
export class SponsorsKnowledgePage {

  constructor(private navCtrl: NavController, private navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsKnowledgePage');
  }

}
