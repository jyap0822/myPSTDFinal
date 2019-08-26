import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SponsorsMinorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsors-minor',
  templateUrl: 'sponsors-minor.html',
})
export class SponsorsMinorPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsMinorPage');
  }

}
