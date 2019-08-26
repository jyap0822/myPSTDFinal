import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs, MenuController } from 'ionic-angular';

/**
 * Generated class for the ScheduleTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-tabs',
  templateUrl: 'schedule-tabs.html',
})
export class ScheduleTabsPage {

  @ViewChild('scheduleTab') tabRef: Tabs;

  tab1Root: string;
  tab2Root: string;

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
    this.tab1Root = 'ScheduleDay1Page';
    this.tab2Root = 'ScheduleDay2Page';
  }
  
  ionViewDidEnter() {
    this.tabRef.select(0);
  }
}

