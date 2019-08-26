import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ScheduleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-modal',
  templateUrl: 'schedule-modal.html',
})
export class ScheduleModalPage {
  
  content: any[];
  status: any[];

  constructor(private navParams: NavParams, private view: ViewController) {
    this.status = this.view.instance;
    console.log(this.status);
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
