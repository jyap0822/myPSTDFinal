import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public firebase: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {    
    this.menuCtrl.enable(false, 'myMenu');
  }


sponsors() {
  this.navCtrl.push('SponsorsTabPage');
}

about() {
  this.navCtrl.push('AboutPage');
}

location() {
  this.navCtrl.push('CityPage');
}

contact() {
  this.navCtrl.push('ContactsPage');
}

speakers() {
  this.navCtrl.push('SpeakersTabsPage');
}

schedule() {
  this.navCtrl.push('ScheduleTabsPage');
}

  navigate(page): void {
    this.navCtrl.setRoot(page);
  }

  ionViewDidLoad(){
    this.firebase.auth.signInAnonymously().catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });
  }

  openLink(){
    window.open('https://goo.gl/forms/P7Tyz9VczLC2AuTr2', '_system', 'location=yes');
    return false;
  }
}
