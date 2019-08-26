import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { ScheduleProvider } from "../../providers/schedule/schedule";
import { Schedule } from "../../models/schedule"
/**
 * Generated class for the ScheduleDay1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-day2',
  templateUrl: 'schedule-day2.html',
})
export class ScheduleDay2Page {

  schedule = [];
  
  constructor(private navCtrl: NavController, private navParams: NavParams, public menuCtrl: MenuController, public scheduleProvider: ScheduleProvider, private modal: ModalController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  ionViewCanEnter() {
    this.loadSpeakers();
  }

  loadSpeakers(){
    this.scheduleProvider.getDayTwoSchedule().subscribe(data => this.schedule = data);
  }

  openModal(data){
    const myModal = this.modal.create('ScheduleModalPage', { data: data });
    console.log(data);

    myModal.present();
  }

}