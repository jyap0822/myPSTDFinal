import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs, MenuController } from 'ionic-angular';

/**
 * Generated class for the SponsorsTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsors-tab',
  templateUrl: 'sponsors-tab.html',
})
export class SponsorsTabPage {

  @ViewChild('sponsorTab') tabRef: Tabs;
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
    this.tab1Root = 'SponsorsLeadershipPage';
    this.tab2Root = 'SponsorsKnowledgePage';
    this.tab3Root = 'SponsorsExperientialPage';
    this.tab4Root = 'SponsorsMinorPage';
  }

  ionViewDidEnter() {
    this.tabRef.select(0);
  }
}
